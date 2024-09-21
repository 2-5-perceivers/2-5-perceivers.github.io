<template>
  <footer>
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center order-2">
        <a href="https://github.com/2-5-perceivers" class="text-neutral-500 hover:text-neutral-700">
          <span class="brand-name">GitHub</span>
          <IconGitHub class="brand-icon" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-neutral-500">
          © 2024 2.5 Perceivers | Under GNU AGPLv3
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconGitHub from './icons/IconGitHub.vue'
</script>

<style scoped>
.brand-name {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.brand-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
