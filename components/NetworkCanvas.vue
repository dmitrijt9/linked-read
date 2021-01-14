<template>
  <D3Network
    class="border border-primary-light"
    :net-nodes="nodes"
    :net-links="links"
    :options="options"
  />
</template>

<script>
import D3Network from 'vue-d3-network'
import 'vue-d3-network/dist/vue-d3-network.css'

export default {
  components: {
    D3Network,
  },
  data() {
    return {
      nodes: [],
      links: [],
      options: {
        nodeSize: 24,
        linkWidth: 8,
        fontSize: 12,
        force: 1000,
        nodeLabels: true,
        linkLabels: true,
      },
    }
  },
  async created() {
    const bindingsStream = await this.$fetcher.getBooksByQuery()

    bindingsStream.on('data', (bindings) => {
      // book node
      this.nodes.push({
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
        this.nodes.push({
          id: author,
          name: author,
          _color: 'orange',
        })

        this.links.push({
          sid: author,
          tid: bindings.book.value,
        })
      })
    })
  },
}
</script>

<style></style>
