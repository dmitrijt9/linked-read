<template>
  <button
    type="button"
    aria-pressed="false"
    class="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none"
    @click="$emit('update:open', !open)"
  >
    <span class="sr-only">Toggle</span>
    <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
    <span
      aria-hidden="true"
      class="absolute w-full h-4 mx-auto rounded-full transition-colors ease-in-out duration-200"
      :class="open ? 'bg-primary' : 'bg-secondary-light'"
    ></span>
    <!-- On: "translate-x-5", Off: "translate-x-0" -->
    <span
      aria-hidden="true"
      class="absolute left-0 inline-block h-5 w-5 border border-white rounded-full bg-white shadow transform transition-all ease-in-out duration-200"
      :class="open ? 'translate-x-5' : 'translate-x-0'"
    ></span>
  </button>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
