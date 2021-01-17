<template>
  <div class="flex flex-col md:flex-row w-full justify-between">
    <div
      class="min-h-16 w-full md:w-1/3 overflow-y-auto md:mr-8 pb-4 md:pb-8 space-y-8"
    >
      <div
        class="w-full mt-4 md:mt-6 flex flex-col items-center md:flex-row justify-center"
      >
        <Search class="w-full" @search="searchByQuery" />
      </div>
      <!-- LOADER -->
      <Loader v-show="isLoading" class="mt-2" />
      <!-- No Results box -->
      <div
        v-if="nodes.length === 0 && links.length === 0"
        class="inline-flex items-center w-full text-sm text-black text-opacity-50 flex-no-wrap"
      >
        <Icon name="ban" class="w-6 h-6 mr-2" /><span>No data</span>
      </div>
      <div id="detail">
        <transition
          enter-active-class="duration-500 ease-out"
          enter-class="opacity-0 scale-95"
          enter-to-class="opacity-400 scale-100"
          leave-active-class="duration-200 ease-in"
          leave-class="opacity-400 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <DetailCard v-if="detailNode" :node="detailNode" />
        </transition>
      </div>
    </div>
    <div
      id="visualizator"
      class="w-full md:w-2/3 py-4 md:py-8 h-full md:h-screen"
    >
      <NetworkCanvas
        class="h-full"
        :nodes="nodes"
        :links="links"
        @nodeSelect="handleNodeSelect"
      />
    </div>
  </div>
</template>

<script>
import utils from '~/lib/utils'
import { nodeType } from '~/lib/nodeType'
export default {
  data() {
    return {
      nodes: [],
      links: [],
      isLoading: false,
      detailNode: null,
    }
  },
  methods: {
    async searchByQuery({ query, selectedSearchType, selectedLimit }) {
      // reset array -> new data incoming
      this.nodes = []
      this.links = []
      this.detailNode = null

      this.isLoading = true
      let bindings = null
      // fetch
      if (selectedSearchType === 'book') {
        bindings = await this.$fetcher.getBooksByQuery(query, selectedLimit)
      } else if (selectedSearchType === 'author') {
        bindings = await this.$fetcher.getAuthorsByQuery(query, selectedLimit)
      } else {
        this.isLoading = false
        return
      }

      if (bindings) {
        this.nodes = bindings.nodes
        this.links = bindings.links
      }

      this.isLoading = false
      this.submitted = false
      utils.scrollTo('#visualizator', document)
    },
    async handleNodeSelect(node) {
      if (node.type !== nodeType.book) {
        return
      }
      this.isNoResults = false
      this.detailNode = null
      this.isLoading = true
      const bookData = await this.$fetcher.getBookDetail(node.id)
      this.detailNode = bookData
      this.isLoading = false
      utils.scrollTo('#detail', document)
    },
  },
}
</script>

<style></style>
