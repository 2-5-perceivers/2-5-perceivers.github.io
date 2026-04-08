<template>
  <div class="header relative isolate px-6 pt-14 lg:px-8 rounded-b-3xl">
    <div class="absolute inset-0 bg-black/20 rounded-b-3xl -z-10" aria-hidden="true" />

    <div
      class="mx-auto max-w-2xl py-16 sm:py-32 lg:py-56 flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-16 xl:gap-32"
    >
      <div class="text-center">
        <h1 class="text-4xl text-neutral-50 sm:text-6xl font-display font-bold">warPinator</h1>
        <p class="mt-6 text-lg leading-8 text-neutral-200">
          The fastest way to move files on your local network. A cross-platform Warpinator port,
          rewritten for peak performance and seamless device-to-device sharing.
        </p>
        <div class="mt-8 flex justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-100 ring-1 ring-neutral-50/40 hover:ring-neutral-50/80"
          >
            <span>Check out on </span>
            <a
              href="https://github.com/2-5-perceivers/warpinator-tauri"
              class="font-semibold text-purple-300 hover:text-purple-100"
            >
              GitHub
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <!-- Transfers card -->
      <div class="relative min-w-[75vw] lg:min-w-auto">
        <div class="backdrop-blur-lg border border-purple-200/10 p-8 rounded-2xl">
          <div class="flex items-center justify-between mb-8">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div class="text-md font-mono text-purple-50">Warpinator</div>
          </div>
          <div class="space-y-4">
            <div
              class="flex items-center gap-4 bg-surface/5 p-4 rounded-xl border border-purple-200/10 text-purple-300 lg:min-w-96"
            >
              <HugeiconsIcon :icon="File02Icon" color="currentColor" />
              <div class="flex-1">
                <div class="text-surface text-sm font-medium">project_archive.tar.gz</div>
                <div class="h-1 bg-purple-900/50 mt-2 rounded-full overflow-hidden">
                  <div class="h-full bg-purple-500 w-[85%]"></div>
                </div>
              </div>
              <div class="text-xs font-mono">85%</div>
            </div>
            <div
              class="flex items-center gap-4 bg-surface/5 p-4 rounded-xl border border-purple-200/10 text-purple-300"
            >
              <HugeiconsIcon :icon="Folder01Icon" color="currentColor" />
              <div class="flex-1">
                <div class="text-surface text-sm font-medium">My Entire Photo Library</div>
                <div class="h-1 bg-purple-900/50 mt-2 rounded-full overflow-hidden">
                  <div class="h-full bg-purple-500 w-[45%]"></div>
                </div>
              </div>
              <div class="text-xs font-mono">45%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { File02Icon, Folder01Icon } from '@hugeicons/core-free-icons'
</script>

<style scoped>
.header {
  background-image: url('@/assets/images/warpinator_header.webp');
  background-size: cover;
  background-position: center;
}
</style>
