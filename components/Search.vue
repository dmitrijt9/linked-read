<template>
  <form
    @submit.prevent="$emit('search', query)"
    class="flex flex-col space-y-4"
  >
    <label for="search" class="text-lg font-light">
      Search your book or author
    </label>
    <div class="relative inline-flex items-center">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <!-- Heroicon name: search -->
        <Icon class="h-5 w-5 text-gray-400" name="search" />
      </div>
      <input
        id="search"
        name="search"
        class="block w-full max-w-sm pl-10 mr-4 pr-3 py-2 border border-transparent shadow rounded-md leading-5 bg-white placeholder-secondary focus:outline-none focus:border-primary-light sm:text-sm"
        placeholder="Type book name"
        type="search"
        required
        v-model="query"
      />
      <Button type="secondary"> Search </Button>
    </div>
  </form>
</template>
<script>
export default {
  data: () => ({
    query: '',
  }),
}
</script>
