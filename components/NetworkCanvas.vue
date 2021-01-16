<template>
  <div
    class="relative border-2 border-secondary-light rounded-md space-y-4 overflow-hidden"
  >
    <div
      class="px-4 py-6 border-b border-secondary-light flex justify-between items-end flex-wrap"
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
      <div>
        <label>Show link labels</label>
        <div class="flex items-center space-x-2">
          <Toggle :open.sync="netSettings.linkLabels" />
        </div>
      </div>
      <div>
        <div class="flex items-center space-x-2">
          <Button
            type="secondary"
            title="Reset custom settings"
            @click="resetSettings"
          >
            Reset settings
          </Button>
        </div>
      </div>
    </div>
    <D3Network
      ref="net"
      :net-nodes="nodes"
      :net-links="links"
      :options="options"
      @node-click="handleNodeClick"
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
  linkLabels: false,
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
  created() {
    this.resetSettings()
  },
  computed: {
    options() {
      return {
        nodeSize: this.netSettings.nodeSize,
        fontSize: this.netSettings.fontSize,
        force: this.netSettings.force,
        nodeLabels: true,
        linkLabels: this.netSettings.linkLabels,
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
      this.$set(this.netSettings, 'nodeSize', defaultNetSettings.nodeSize)
      this.$set(this.netSettings, 'fontSize', defaultNetSettings.fontSize)
      this.$set(this.netSettings, 'force', defaultNetSettings.force)
      this.$set(this.netSettings, 'linkLabels', defaultNetSettings.linkLabels)
    },
    handleNodeClick(e, node) {
      if (!node._cssClass.includes('selected')) {
        this.unselectNode()
      }

      node = Object.assign(node, { _cssClass: `${node._cssClass} selected` })
      this.$set(this.nodes, node.index, node)
      this.$emit('nodeSelect', node)
    },
    unselectNode() {
      const selectedNode = this.nodes.find((n) =>
        n._cssClass.includes('selected')
      )
      if (selectedNode) {
        this.$set(
          this.nodes,
          selectedNode.index,
          Object.assign(selectedNode, {
            _cssClass: `${selectedNode._cssClass.replace('selected', '')}`,
          })
        )
      }
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
