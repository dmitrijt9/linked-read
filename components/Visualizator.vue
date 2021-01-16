<template>
  <div class="flex flex-col md:flex-row w-full justify-between md:max-h-screen">
    <div class="min-h-16 w-full md:w-1/3 overflow-y-auto md:mr-8 pb-4 md:pb-8">
      <Search @search="getBooksByQuery" />
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
    async getBooksByQuery(query) {
      // reset array -> new data incoming
      this.nodes = []
      this.links = []

      // fetch
      const bindings = await this.$fetcher.getBooksByQuery(query)
      if (bindings) {
        this.nodes = bindings.nodes
        this.links = bindings.links
      }
    },
  },
}
</script>

<style></style>
