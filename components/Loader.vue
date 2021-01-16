<template>
  <div
    class="inline-flex items-center px-3 py-2 bg-primary text-white text-sm rounded-md"
  >
    <Icon class="animate-spin -ml-1 mr-3 h-5 w-5" name="load-circle" />
    <slot>
      <span>Loading</span>
    </slot>
  </div>
</template>
