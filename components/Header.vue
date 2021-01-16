<template>
  <div class="relative py-8 sm:py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <nav
        class="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div
          class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
        >
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <span class="sr-only">Linked Read</span>
              <Icon name="logo" class="h-8 sm:h-16 w-auto text-primary" />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-black hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                id="main-menu"
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
          <a
            v-for="link in menuLinks"
            :key="link.label"
            :href="link.route"
            class="font-medium text-black hover:text-secondary"
            >{{ link.label }}</a
          >
        </div>
        <div
          class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
        >
          <a
            href="https://github.com/dmitrijt9/linked-read"
            title="Linked Read Github"
          >
            <Button>Github</Button>
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
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        v-if="menuOpen"
      >
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-primary.svg"
                alt=""
              />
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
              <a
                v-for="link in menuLinks"
                :key="link.label"
                :href="link.route"
                class="block px-3 py-2 rounded-md text-base font-medium text-black bg-secondary bg-opacity-25"
                role="menuitem"
                >{{ link.label }}</a
              >
            </div>
            <div role="none">
              <a
                href="https://github.com/dmitrijt9/linked-read"
                class="block w-full px-5 py-3 text-center font-medium text-primary hover:text-primary-light"
                role="menuitem"
                target="_blank"
              >
                Github
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
          label: 'About',
          route: 'about',
        },
      ],
    }
  },
}
</script>
