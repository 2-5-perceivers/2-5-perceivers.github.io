<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="bg-transparent">
      <div class="mx-auto sm:max-w-screen-sm md:max-w-3xl lg:max-w-5xl px-2 sm:px-5 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <RouterLink to="/" class="flex shrink-0 items-center">
              <span class="text-neutral-100 text-2xl font-display font-bold">2.5</span>
              <span :class="`${props.accentColorClass} text-2xl font-display font-bold px-2`"
                >Perceivers</span
              >
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  accentColorClass: {
    type: String,
    default: 'text-emerald-400'
  }
})
</script>
