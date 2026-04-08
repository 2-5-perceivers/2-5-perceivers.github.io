<template>
  <a
    :href="props.to"
    target="_blank"
    class="flex gap-4 rounded-xl bg-emerald-50 p-6 ring-1 ring-inset ring-emerald-900/10 hover:bg-emerald-100/50 hover:ring-emerald-900/20 cursor-pointer group/project-card"
  >
    <div class="pt-1">
      <slot name="icon"></slot>
    </div>
    <div class="text-base leading-7">
      <div class="font-semibold text-neutral-900 flex flex-row items-center">
        <slot name="heading"></slot>
        <HugeiconsIcon
          :icon="Share05Icon"
          class="size-4 ml-1.5 text-emerald-700 hidden group-hover/project-card:block"
        />
      </div>
      <div class="mt-2 text-neutral-800">
        <slot name="content"></slot>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { Share05Icon } from '@hugeicons/core-free-icons'

const props = defineProps({
  to: {
    type: String,
    default: ''
  }
})
</script>
