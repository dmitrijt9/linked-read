/**
 * @param $fetcher Sparql Fetcher instance (https://www.npmjs.com/package/fetch-sparql-endpoint)
 * @param $store Vuex store
 */
export default ($fetcher, $store, $tailwind) => {
  return {
    /**
     * Get books and their authors by a query string.
     * @param query
     * @param limit Maximum number of returned items
     */
    async getBooksByQuery(query, limit = 10) {
      try {
        const bindingsStream = await $fetcher.fetchBindings(
          'https://dbpedia.org/sparql',
          `
          PREFIX dbo: <http://dbpedia.org/ontology/>
          SELECT ?book
            (group_concat(DISTINCT CONCAT(?author, " - ", ?authorName); separator = ",") as ?authors) 
            (group_concat(DISTINCT ?publisher; separator = ",") as ?publishers)
            (group_concat(DISTINCT ?otherBooksFromSerie; separator = ",") as ?booksFromSerie) 
            (sample(?name) as ?bookName) 
            (sample(?description) as ?bookDescription) 
            (sample(?pages) as ?numPages) 
            (sample(?isbn_tmp) as ?isbn) 
            (sample(?series) as ?serie ) 
            (sample(?seriesName) as ?serieName ) 
            
            WHERE {
              ?book a dbo:Book .
              ?book dbo:author ?author . 
              OPTIONAL { ?book dbo:numberOfPages ?pages }
              OPTIONAL { ?book dbo:isbn ?isbn_tmp }
              OPTIONAL { ?book dbo:publisher ?publisher }
              # Get serie to which the book belongs to
              OPTIONAL { 
                ?book dbo:series ?series .
                # Get serie's english name
                ?series rdfs:label ?seriesName .
                FILTER(LANGMATCHES(LANG(?seriesName), 'en'))
                # get other books from serie
                ?otherBooks dbo:series ?series .
                # Remove current searched book from set of the books from the series
                FILTER(?book NOT IN (?otherBooks))
                # Get names of other books from serie
                ?otherBooks rdfs:label ?otherBooksName .
                FILTER(LANGMATCHES(LANG(?otherBooksName), 'en'))
                BIND (CONCAT(?otherBooks, " - ", ?otherBooksName) as ?otherBooksFromSerie)
              }
    
              # get the English title
              ?book rdfs:label ?name.
              FILTER(LANGMATCHES(LANG(?name), 'en'))
    
              # get an English description, but not the text
              ?book rdfs:comment ?description .
              FILTER(LANGMATCHES(LANG(?description), 'en'))

              # get authors names and group with iris
              ?author rdfs:label ?authorName .
              FILTER(LANGMATCHES(LANG(?authorName), 'en'))
    
              # filter for books whose title contains query
              ?name bif:contains '"${query}"'
            }
            GROUP BY ?book
            LIMIT ${limit}
          `
        )

        if (!bindingsStream) {
          throw new Error(
            `Bad request with: query = ${query} and limit = ${limit}`
          )
        }

        const nodes = []
        const links = []

        bindingsStream.on('data', (bindings) => {
          // book node
          nodes.push({
            id: bindings.book.value,
            name: bindings.bookName.value,
            _color: $tailwind.theme.colors.primary.default,
            _cssClass: 'text-primary',
            meta: {
              authors: bindings.authors.value,
              publishers: bindings.publishers?.value,
              numPages: bindings.numPages?.value,
              isbn: bindings.isbn?.value,
            },
          })
          bindings.authors.value.split(',').forEach((author) => {
            const arr = author.split(' - ')
            const authorIri = arr[0]
            const authorName = arr[1]
            // author node
            nodes.push({
              id: authorIri,
              name: authorName,
              _color: $tailwind.theme.colors.red[400],
              _cssClass: 'text-red-400',
            })

            links.push({
              sid: authorIri,
              tid: bindings.book.value,
            })

            // if serie exists, then links to the author
            if (bindings.serie) {
              links.push({
                sid: authorIri,
                tid: bindings.serie.value,
              })
            }
          })

          // if book belongs to some Serie, then add nodes and links
          if (bindings.serie) {
            nodes.push({
              id: bindings.serie.value,
              name: bindings.serieName.value,
              _color: $tailwind.theme.colors.blue[500],
              _cssClass: 'text-blue-500',
            })

            links.push({
              sid: bindings.book.value,
              tid: bindings.serie.value,
            })

            bindings.booksFromSerie.value
              .split(',')
              .forEach((bookFromSerie) => {
                const arr = bookFromSerie.split(' - ')
                const bookIri = arr[0]
                const bookName = arr[1]
                nodes.push({
                  id: bookIri,
                  name: bookName,
                  _color: $tailwind.theme.colors.blue[200],
                  _cssClass: 'text-blue-200',
                })

                links.push({
                  sid: bindings.serie.value,
                  tid: bookIri,
                })
              })
          }
        })

        return {
          nodes,
          links,
        }
      } catch (e) {
        console.error(
          `${e}: Bad request with: query = ${query} and limit = ${limit}`
        )
      }
    },
  }
}
