<template>
  <div class="relative bg-gray-50 overflow-hidden">
    <main class="my-16 mx-auto max-w-9xl px-4 sm:my-24">
      <div class="text-center">
        <h1
          class="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl"
        >
          <span class="block text-primary-dark xl:inline">Linked Read</span>
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
          <NuxtLink class="w-full inline-flex mt-3 sm:mt-0 sm:ml-3" to="about">
            <Button class="w-full" type="secondary" size="lg"
              >Learn more</Button
            >
          </NuxtLink>
        </div>
      </div>
      <div class="mt-32">
        <div
          class="cursor-pointer h-16 w-16 mx-auto flex items-center justify-center group"
          @click="scrollTo('#visualizer')"
        >
          <Icon
            name="chevron-double-down"
            class="h-16 w-16 text-primary animate-bounce group-hover:animate-pulse transition-all duration-150"
          />
        </div>
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
