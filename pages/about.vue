<template>
  <div>
    <section class="mt-16 mx-auto max-w-9xl max-w- px-4 sm:mt-24 sm:px-6">
      <div class="text-center">
        <h1
          class="text-4xl tracking-tight font-extrabold text-black text-opacity-75 sm:text-5xl md:text-6xl leading-tight"
        >
          <span class="block">Best way to use</span>
          <span class="block text-primary-dark">linked data</span>
        </h1>
        <p
          class="mt-3 max-w-md mx-auto text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          Linked read uses benefits of a vast world of semantic web. It is
          trying to make your love to reading even more interesting while using
          idea of open and linked data.
        </p>
      </div>
    </section>
    <!-- FEATURES -->
    <section class="bg-white mt-16">
      <div
        class="max-w-9xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
      >
        <div>
          <h2 class="mt-2 text-3xl font-extrabold text-black text-opacity-75">
            Features
          </h2>
          <p class="mt-4 text-lg text-black text-opacity-50">
            In Linked Read you can easily search books and authors and then see
            found results in an interactive network map. Where nodes are books,
            authors or series and links between nodes are relations such as -
            "Author written a book." or "Book belongs to a series."
          </p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl
            class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8"
          >
            <div class="flex">
              <!-- Heroicon name: check -->
              <Icon class="flex-shrink-0 h-8 w-8 text-green-500" name="check" />
              <div class="ml-3">
                <dt
                  class="text-lg leading-6 font-semibold text-black text-opacity-75"
                >
                  Search books
                </dt>
                <dd class="mt-2 text-base text-black text-opacity-50">
                  Find books by just typing a part of a title of the book you
                  are looking for.
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <Icon class="flex-shrink-0 h-8 w-8 text-green-500" name="check" />
              <div class="ml-3">
                <dt
                  class="text-lg leading-6 font-semibold text-black text-opacity-75"
                >
                  Search authors
                </dt>
                <dd class="mt-2 text-base text-black text-opacity-50">
                  Find authors by just typing a name or a surname of the author
                  you are looking for.
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <Icon class="flex-shrink-0 h-8 w-8 text-green-500" name="check" />
              <div class="ml-3">
                <dt
                  class="text-lg leading-6 font-semibold text-black text-opacity-75"
                >
                  Discover relationships
                </dt>
                <dd class="mt-2 text-base text-black text-opacity-50">
                  See what books an author written or what series he created. Or
                  look to what series a book belongs to. All this in an
                  interactive network map, so you see all in one place.
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <Icon class="flex-shrink-0 h-8 w-8 text-green-500" name="check" />
              <div class="ml-3">
                <dt
                  class="text-lg leading-6 font-semibold text-black text-opacity-75"
                >
                  Book detail
                </dt>
                <dd class="mt-2 text-base text-black text-opacity-50">
                  Select a node representing a book and look for some details
                  about it.
                </dd>
              </div>
            </div>
            <div class="flex">
              <!-- Heroicon name: check -->
              <Icon class="flex-shrink-0 h-8 w-8 text-green-500" name="check" />
              <div class="ml-3">
                <dt
                  class="text-lg leading-6 font-semibold text-black text-opacity-75"
                >
                  Set up a map
                </dt>
                <dd class="mt-2 text-base text-black text-opacity-50">
                  Set up a network map as you wish. You'd like to group nodes
                  tight, bigger nodes or larger font size? No problem.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <!-- CTA -->
    <section class="bg-primary-light">
      <div
        class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
      >
        <h2
          class="text-3xl font-extrabold text-black text-opacity-75 sm:text-4xl"
        >
          <span class="block">Level up your reading hobby.</span>
          <span class="block">Start using Linked Read.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-primary-dark">
          Visualize data about books and discover undiscovered.
        </p>

        <NuxtLink
          to="/"
          class="mt-8 w-full inline-flex items-center justify-center sm:w-auto"
        >
          <Button type="secondary" size="lg"> Try now </Button>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Linked Read | Best way to use linked data',
    }
  },
}
</script>
