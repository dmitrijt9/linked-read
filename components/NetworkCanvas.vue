<template>
  <div
    class="relative border border-primary-light rounded-md space-y-4 overflow-hidden"
  >
    <div
      class="px-4 py-6 border-b border-secondary flex justify-between flex-wrap"
    >
      <div>
        <label>Node size</label>
        <div class="flex items-center space-x-2">
          <input
            type="range"
            min="10"
            max="100"
            v-model="netSettings.nodeSize"
          />
          <span>{{ netSettings.nodeSize }}</span>
        </div>
      </div>
      <div>
        <label>Font size</label>
        <div class="flex items-center space-x-2">
          <input
            type="range"
            min="10"
            max="36"
            v-model="netSettings.fontSize"
          />
          <span>{{ netSettings.fontSize }}</span>
        </div>
      </div>
      <div>
        <label>Force</label>
        <div class="flex items-center space-x-2">
          <input
            type="range"
            min="1000"
            max="5000"
            v-model="netSettings.force"
          />
          <span>{{ netSettings.force }}</span>
        </div>
      </div>
    </div>
    <D3Network
      ref="net"
      :net-nodes="nodes"
      :net-links="links"
      :options="options"
    />
  </div>
</template>

<script>
import D3Network from 'vue-d3-network'
import 'vue-d3-network/dist/vue-d3-network.css'

const defaultNetSettings = {
  force: 3000,
  nodeSize: 24,
  fontSize: 12,
}

export default {
  components: {
    D3Network,
  },
  props: {
    nodes: {
      type: Array,
      default: () => {
        return []
      },
    },
    links: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  mounted() {
    this.resetSettings()
  },
  computed: {
    options() {
      return {
        nodeSize: this.netSettings.nodeSize,
        fontSize: this.netSettings.fontSize,
        force: this.netSettings.force,
        nodeLabels: true,
        linkLabels: true,
      }
    },
  },
  data() {
    return {
      netSettings: {},
    }
  },
  methods: {
    resetSettings() {
      this.$set(this.$data, 'netSettings', defaultNetSettings)
    },
  },
}
</script>

<style>
.node {
  @apply stroke-current;
}

.node:hover {
  @apply text-primary-dark stroke-2 stroke-current;
}
</style>
