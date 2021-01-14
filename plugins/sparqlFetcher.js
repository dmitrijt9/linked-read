import { SparqlEndpointFetcher } from 'fetch-sparql-endpoint'
import sparqlFetcher from '~/lib/sparqlFetcher'

export default ({ store }, inject) => {
  // Inject fetcher (~/lib/sparqlFetcher.js) in Vue, context and store.
  inject('fetcher', sparqlFetcher(new SparqlEndpointFetcher(), store))
}
