import { SparqlEndpointFetcher } from 'fetch-sparql-endpoint'
import resolveConfig from 'tailwindcss/resolveConfig'
import sparqlFetcher from '~/lib/sparqlFetcher'
import tailwindConfig from '~/tailwind.config'

export default ({ store }, inject) => {
  // get my custom theme from tailwind config
  const tailwind = resolveConfig(tailwindConfig)
  // Inject fetcher (~/lib/sparqlFetcher.js) in Vue, context and store.
  inject('fetcher', sparqlFetcher(new SparqlEndpointFetcher(), store, tailwind))
}
