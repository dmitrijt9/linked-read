<template>
  <div class="relative py-6 sm:py-10 z-10">
    <div class="max-w-9xl mx-auto px-4 sm:px-6">
      <nav
        class="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div
          class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
        >
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="/" class="inline-flex items-center">
              <span class="sr-only">Linked Read</span>
              <Icon
                name="logo"
                class="h-8 sm:h-16 w-auto text-primary-dark animate-pulse"
              />
              <span class="md:hidden text-primary-dark ml-3 font-sans text-base"
                >Linked Read</span
              >
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                id="main-menu"
                type="button"
                class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-black hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-haspopup="true"
                @click="menuOpen = true"
              >
                <span class="sr-only">Open main menu</span>
                <!-- Heroicon name: menu -->
                <Icon class="w-6 h-6" name="menu" />
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:flex md:space-x-10">
          <NuxtLink
            v-for="link in menuLinks"
            :key="link.label"
            :to="link.route"
            class="font-medium text-base text-secondary hover:text-black transition-colors duration-150"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
        <div
          class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
        >
          <a
            href="https://github.com/dmitrijt9/linked-read"
            title="Linked Read Github"
          >
            <Button><Icon name="github" class="h-4 w-4 mr-2" /> Github</Button>
          </a>
        </div>
      </nav>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="menuOpen"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div class="inline-flex items-center">
              <Icon
                name="logo"
                class="h-8 w-auto text-primary-dark animate-pulse"
              />
              <span class="md:hidden text-primary-dark ml-3 font-sans text-sm"
                >Linked Read</span
              >
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                @click="menuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: x -->
                <Icon name="close" class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-2 pt-2 pb-3" role="none">
              <NuxtLink
                v-for="link in menuLinks"
                :key="link.label"
                :to="link.route"
                class="block px-3 py-2 rounded-md text-base font-medium text-black bg-secondary-light text-opacity-75 focus:bg-secondary bg-opacity-50"
                role="menuitem"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
            <div role="none">
              <a
                href="https://github.com/dmitrijt9/linked-read"
                class="inline-flex items-center justify-center w-full px-5 py-3 font-medium text-primary hover:text-primary-light"
                role="menuitem"
                target="_blank"
              >
                <Icon name="github" class="h-5 w-5 mr-2" />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      menuLinks: [
        {
          label: 'Home',
          route: '/',
        },
        {
          label: 'About',
          route: 'about',
        },
      ],
    }
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply border-b-2 border-primary;
}
</style>
