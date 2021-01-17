<template>
  <form
    class="flex flex-col space-y-4"
    @submit.prevent="
      $emit('search', { query, selectedSearchType, selectedLimit })
    "
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
        v-model="query"
        name="search"
        class="block w-full max-w-sm pl-10 mr-4 pr-3 py-2 border border-transparent shadow rounded-md leading-5 bg-white placeholder-secondary focus:outline-none focus:border-primary-light sm:text-sm"
        :placeholder="`${
          selectedSearchType === 'book' ? 'Norwegian wood' : 'Murakami'
        }`"
        type="search"
        required
      />
      <Button type="secondary"> Search </Button>
    </div>
    <div class="flex flex-wrap">
      <div class="inline-flex items-center flex-no-wrap space-x-1 py-1 px-2">
        <input
          v-model="selectedSearchType"
          type="radio"
          value="book"
          class="text-primary border-secondary focus:outline-none border focus:border-primary-light transition-all duration-150"
        />
        <label class="text-sm text-black text-opacity-75">Search book</label>
      </div>
      <div class="inline-flex items-center flex-no-wrap space-x-1 py-1 px-2">
        <input
          v-model="selectedSearchType"
          type="radio"
          value="author"
          class="text-primary border-secondary outline-none focus:outline-none border focus:border-primary-light transition-all duration-150"
        />
        <label class="text-sm text-black text-opacity-75">Search author</label>
      </div>
      <div class="inline-flex items-center flex-no-wrap space-x-1 py-1 px-2">
        <select
          id="limit"
          name="limit"
          class="block w-full pl-2 pr-8 py-1 text-base border border-secondary outline-nonefocus:outline-none focus:border-primary sm:text-sm rounded-md transition-all duration-150 focus:ring-0"
          v-model.number="selectedLimit"
        >
          <option>1</option>
          <option selected>10</option>
          <option>20</option>
          <option>30</option>
          <option>50</option>
        </select>
        <label for="limit" class="text-sm text-black text-opacity-75">
          Limit
        </label>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data: () => ({
    query: '',
    selectedSearchType: 'book',
    selectedLimit: 10,
  }),
}
</script>
<style scoped>
select:focus,
[type='radio']:focus,
[type='search']:focus {
  outline: none;
  outline-offset: 0;
  box-shadow: none;
}
</style>
