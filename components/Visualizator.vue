<template>
  <div
    id="visualizator"
    class="flex flex-col md:flex-row w-full justify-between md:max-h-screen"
  >
    <div class="min-h-16 w-full md:w-1/3 overflow-y-auto md:mr-8 pb-4 md:pb-8">
      <div
        class="w-full mt-4 md:mt-6 flex flex-col items-center md:flex-row md:items-end justify-center"
      >
        <Search class="w-full" @search="getBooksByQuery" />
        <Loader class="mt-4" v-show="isLoading" />
      </div>
    </div>
    <NetworkCanvas
      class="w-full md:w-2/3 my-4 md:my-8"
      :nodes="nodes"
      :links="links"
    />
  </div>
</template>

<script>
import utils from '~/lib/utils'
export default {
  data() {
    return {
      nodes: [],
      links: [],
      isLoading: false,
    }
  },
  methods: {
    async getBooksByQuery(query) {
      // reset array -> new data incoming
      this.nodes = []
      this.links = []

      this.isLoading = true
      // fetch
      const bindings = await this.$fetcher.getBooksByQuery(query)
      if (bindings) {
        this.nodes = bindings.nodes
        this.links = bindings.links
      }
      this.isLoading = false
      utils.scrollTo('#visualizator', document)
    },
  },
}
</script>

<style></style>
