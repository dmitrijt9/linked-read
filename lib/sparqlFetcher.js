/**
 * @param $fetcher Sparql Fetcher instance (https://www.npmjs.com/package/fetch-sparql-endpoint)
 * @param $store Vuex store
 */
export default ($fetcher, $store) => {
  return {
    /**
     * Get books and their authors by a query string.
     * @param query
     * @param limit Maximum number of returned items
     */
    async getBooksByQuery(query = 'love', limit = 10) {
      try {
        const bindingsStream = await $fetcher.fetchBindings(
          'https://dbpedia.org/sparql',
          `
          PREFIX dbo: <http://dbpedia.org/ontology/>
          SELECT ?book (group_concat(DISTINCT ?author; separator = ",") as ?authors) (group_concat(DISTINCT ?publisher; separator = ",") as ?publishers) (sample(?pages) as ?numPages) (sample(?isbn_tmp) as ?isbn) WHERE {
            ?book a dbo:Book .
            ?book dbo:author ?author . 
            OPTIONAL { ?book dbo:numberOfPages ?pages }
            OPTIONAL { ?book dbo:isbn ?isbn_tmp }
            OPTIONAL { ?book dbo:publisher ?publisher }
    
            # get the English title
            ?book rdfs:label ?name.
            FILTER(LANGMATCHES(LANG(?name), 'en'))
    
            # get an English description, but not the text
            ?book rdfs:comment ?text .
            FILTER(LANGMATCHES(LANG(?text), 'en'))
    
    
            # filter for books whose title contains "java"
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
            name: bindings.book.value,
            meta: {
              authors: bindings.authors.value,
              publishers: bindings.publishers?.value,
              numPages: bindings.numPages?.value,
              isbn: bindings.isbn?.value,
            },
          })
          bindings.authors.value.split(',').forEach((author) => {
            // author node
            nodes.push({
              id: author,
              name: author,
              _color: 'orange',
            })

            links.push({
              sid: author,
              tid: bindings.book.value,
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
