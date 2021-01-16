import { nodeType } from '~/lib/nodeType'

/**
 * @param $fetcher Sparql Fetcher instance (https://www.npmjs.com/package/fetch-sparql-endpoint)
 * @param $store Vuex store
 * Get all books by query. Fetch its authors and serie (if it belong to some). Fetch other books from series if exists.
 */
export default ($fetcher, $store, $tailwind) => {
  return {
    /**
     * Get books and their authors by a query string.
     * @param query
     * @param limit Maximum number of returned items
     */
    async getBooksByQuery(query, limit = 10, type = 'book') {
      try {
        const bindingsStream = await $fetcher.fetchBindings(
          'https://dbpedia.org/sparql',
          `
          PREFIX dbo: <http://dbpedia.org/ontology/>
          SELECT ?book
            (group_concat(DISTINCT CONCAT(?author, " - ", ?authorName); separator = ",") as ?authors) 
            (group_concat(DISTINCT ?otherBooksFromSerie; separator = ",") as ?booksFromSerie) 
            (sample(?name) as ?bookName) 
            (sample(?series) as ?serie ) 
            (sample(?seriesName) as ?serieName ) 
            
            WHERE {
              ?book a dbo:Book .
              ?book dbo:author ?author . 
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
    
              # get authors names
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
          // helper variable to distinguish if current book should be added to the nodes list (maybe it's already there)
          let canAddToOrangeNodes = true
          // if book belongs to some Serie, then add nodes and links
          if (bindings.serie) {
            // check/find if current book si already in nodes
            const duplicate = nodes.find((n) => n.id === bindings.book.value)
            // if book is already in nodes, then just mark it as found book and invalidate canAddToOrangeNodes (to prevent duplicates)
            // if not, then add his serie to nodes list and all sufficient links
            if (duplicate) {
              canAddToOrangeNodes = false
              nodes.map((n) => {
                if (n.id === duplicate.id) {
                  n._color = $tailwind.theme.colors.primary.default
                  n._cssClass = 'text-primary'
                }

                return n
              })
            } else {
              // add serie to nodes
              nodes.push({
                id: bindings.serie.value,
                name: bindings.serieName.value,
                _color: $tailwind.theme.colors.blue[500],
                _cssClass: 'text-blue-500',
                type: nodeType.series,
              })

              // link book with its serie
              links.push({
                sid: bindings.book.value,
                tid: bindings.serie.value,
                name: 'contains',
              })

              // add other books from serie and link them to the serie
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
                    _cssClass: 'text-blue-200 cursor-pointer',
                    type: nodeType.book,
                  })

                  links.push({
                    sid: bindings.serie.value,
                    tid: bookIri,
                    name: 'contains',
                  })
                })
            }
          }

          // if no duplicate book on nodes list then add the book, it's authors and links between it
          if (canAddToOrangeNodes) {
            // Add found book to nodes
            nodes.push({
              id: bindings.book.value,
              name: bindings.bookName.value,
              _color: $tailwind.theme.colors.primary.default,
              _cssClass: 'text-primary cursor-pointer',
              type: nodeType.book,
            })

            // Add book's authors to nodes and link them with a book
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
                type: nodeType.author,
              })

              links.push({
                sid: authorIri,
                tid: bindings.book.value,
                name: 'written',
              })

              // if serie exists, then links to the author
              if (bindings.serie) {
                links.push({
                  sid: authorIri,
                  tid: bindings.serie.value,
                  name: 'written series',
                })
              }
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

    /**
     * @param bookIri Iri of the book source (subject) we want to get details about.
     * Get some detailed data of the book with @bookIri.
     */
    async getBookDetail(bookIri) {
      console.log(bookIri)
      try {
        const bindingsStream = await $fetcher.fetchBindings(
          'https://dbpedia.org/sparql',
          `
          PREFIX dbo: <http://dbpedia.org/ontology/>
          PREFIX dbp: <http://dbpedia.org/ontology/>
          SELECT 
            ?title 
            ?description  
            ?pages
            ?publisher
            ?isbn
            ?genre
            (CONCAT(?author, " - ", ?authorName) as ?authors)
          WHERE {
            # english title
            <${bookIri}> rdfs:label ?title .
            FILTER(LANGMATCHES(LANG(?title), 'en'))

            # english description
            <${bookIri}> rdfs:comment ?description .
            FILTER(LANGMATCHES(LANG(?description), 'en'))

            # get authors
            <${bookIri}> dbo:author ?author .
            ?author rdfs:label ?authorName .
            FILTER(LANGMATCHES(LANG(?authorName), 'en'))

            OPTIONAL { <${bookIri}> dbo:numberOfPages ?pages }
            OPTIONAL { <${bookIri}> dbo:isbn ?isbn }
            OPTIONAL { <${bookIri}> dbo:publisher ?publisher }
            OPTIONAL { 
              <${bookIri}> dbo:literaryGenre ?litGenre .
              ?litGenre rdfs:label ?genre .
              FILTER(LANGMATCHES(LANG(?genre), 'en'))
            }
          }
          `
        )

        if (!bindingsStream) {
          throw new Error(`Bad request with: bookIri = ${bookIri}`)
        }

        let data = null
        await new Promise((resolve) =>
          bindingsStream.on('data', (bindings) => {
            data = bindings
            data.iri = bookIri
            data.type = nodeType.book
            resolve()
          })
        )
        return data
      } catch (e) {
        console.error(`${e}: Bad request with: bookIri = ${bookIri}`)
      }
    },
    /**
     * Get authors and their books by a query string.
     * @param query
     * @param limit Maximum number of returned items
     */
    async getAuthorsByQuery(query, limit = 10) {
      try {
        const bindingsStream = await $fetcher.fetchBindings(
          'https://dbpedia.org/sparql',
          `
          PREFIX dbo: <http://dbpedia.org/ontology/>
          SELECT ?author
            (group_concat(DISTINCT CONCAT(?book, " - ", ?bookTitle); separator = ",") as ?books) 
            (sample(?name) as ?authorName) 
            
            WHERE {
              ?author a dbo:Person .
              ?book dbo:author ?author . 
    
              # get the English name
              ?author rdfs:label ?name.
              FILTER(LANGMATCHES(LANG(?name), 'en'))
    
              # get books titles
              ?book rdfs:label ?bookTitle .
              FILTER(LANGMATCHES(LANG(?bookTitle), 'en'))
    
              # filter for authors whose title contains query
              ?name bif:contains '"${query}"'
            }
            GROUP BY ?author
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
          // Add found author to nodes
          nodes.push({
            id: bindings.author.value,
            name: bindings.authorName.value,
            _color: $tailwind.theme.colors.primary.default,
            _cssClass: 'text-primary',
            type: nodeType.author,
          })

          // Link author's books
          bindings.books.value.split(',').forEach((book) => {
            const arr = book.split(' - ')
            const bookIri = arr[0]
            const bookTitle = arr[1]
            // author node
            nodes.push({
              id: bookIri,
              name: bookTitle,
              _color: $tailwind.theme.colors.blue[400],
              _cssClass: 'text-blue-400 cursor-pointer',
              type: nodeType.book,
            })

            links.push({
              sid: bookIri,
              tid: bindings.author.value,
              name: 'written',
            })
          })
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
