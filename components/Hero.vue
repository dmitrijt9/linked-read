<template>
  <div class="relative bg-gray-50 overflow-hidden">
    <main class="my-16 mx-auto max-w-7xl px-4 sm:my-24">
      <div class="text-center">
        <h1
          class="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl"
        >
          <span class="block text-primary xl:inline">Linked Read</span>
        </h1>
        <p
          class="mt-3 max-w-md mx-auto text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          Visualize data about books and authors, that you are interested in.
          Discover new pieces, authors and their series. ✌
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Button
            class="w-full"
            type="primary"
            size="lg"
            @click="scrollTo('#visualizer')"
            >Go ahead</Button
          >
          <Button
            class="w-full mt-3 sm:mt-0 sm:ml-3"
            type="secondary"
            size="lg"
            @click="scrollTo('#visualizer')"
            >Learn more</Button
          >
        </div>
      </div>
      <div class="mt-32">
        <Icon
          name="chevron-double-down"
          class="h-16 w-16 text-primary-light mx-auto animate-bounce"
        />
      </div>
    </main>
  </div>
</template>

<script>
import utils from '~/lib/utils'
export default {
  methods: {
    scrollTo(selector) {
      utils.scrollTo(selector, document)
    },
  },
}
</script>
