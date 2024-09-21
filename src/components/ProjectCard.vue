<template>
  <div class="flex gap-4 rounded-xl bg-emerald-50 p-6 ring-1 ring-inset ring-emerald-900/10">
    <slot name="icon"></slot>
    <div class="text-base leading-7">
      <div class="font-semibold text-neutral-900">
        <slot name="heading"></slot>
      </div>
      <div class="mt-2 text-neutral-800">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
