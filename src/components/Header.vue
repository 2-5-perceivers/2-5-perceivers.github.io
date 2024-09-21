<template>
  <div class="header relative isolate px-6 pt-14 lg:px-8 rounded-b-3xl">
    <!-- A div that covers the entire background -->

    <div class="absolute inset-0 bg-black/20 rounded-b-3xl -z-10" aria-hidden="true" />

    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="mb-8 flex justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-100 ring-1 ring-neutral-50/40 hover:ring-neutral-50/80"
        >
          <span>Polybius is now online</span>
          <a
            href="https://2-5-perceivers.github.io/polybius/"
            class="font-semibold text-emerald-300 hover:text-emerald-100"
          >
            Use
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-neutral-50 sm:text-6xl">
          Your friendly open source developers
        </h1>
        <p class="mt-6 text-lg leading-8 text-neutral-200">
          Just 2 and a half friends who write code when we come up with ideas. It doesn't matter how
          good the ideas are. From Flutter packages to smart password generators, we do it all.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-image: url('../assets/images/header.webp');
  background-size: cover;
  background-position: center;
}
</style>
