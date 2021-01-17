<template>
  <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
    <div class="text-center">
      <h1
        class="text-4xl tracking-tight font-extrabold text-black text-opacity-75 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline">Ooops...</span>
        <span class="block text-primary-dark xl:inline">{{
          error.statusCode
        }}</span>
      </h1>
      <p
        class="mt-3 max-w-md mx-auto text-base text-black text-opacity-50 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
      >
        {{
          error.statusCode === 404
            ? 'This page does not exist. Sure, you wanted to get somewhere else. Go to homepage and see your options.'
            : "That's embarassing. Some error occured. Please, return to homepage or contact me."
        }}
      </p>
      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div class="rounded-md shadow">
          <NuxtLink to="/" class="w-full flex items-center justify-center">
            <Button size="lg" type="secondary">Return Home</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
}
</script>
