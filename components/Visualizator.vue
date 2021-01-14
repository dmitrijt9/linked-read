<template>
  <div class="flex flex-col md:flex-row w-full justify-between max-h-screen">
    <div class="min-h-16 w-full md:w-1/3 overflow-y-auto md:mr-8">
      Tady bude vyhledavac
      <button @click="getBooksByQuery">search</button>
    </div>
    <NetworkCanvas class="w-full md:w-2/3 mb-8" :nodes="nodes" :links="links" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodes: [],
      links: [],
    }
  },
  methods: {
    async getBooksByQuery() {
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
  },
}
</script>

<style></style>
