<template>
  <button :class="style" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'secondary',
    },
    size: {
      type: String,
      default: 'md',
    },
  },
  computed: {
    style() {
      let style =
        'inline-flex items-center justify-center font-medium rounded-md shadow focus:outline-none transition-all duration-150'

      if (this.size === 'md') {
        style += ' px-3 py-1 md:px-4 md:py-2 text-sm hover:shadow-md'
      }

      if (this.size === 'lg') {
        style +=
          ' px-8 py-3 md:py-4 text-base md:text-lg md:px-10 hover:shadow-lg'
      }

      if (this.type === 'secondary') {
        style += ' text-primary bg-white'
      }

      if (this.type === 'primary') {
        style += ' text-white bg-primary'
      }

      return style
    },
  },
}
</script>
