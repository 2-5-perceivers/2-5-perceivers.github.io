<template>
  <div class="isolate overflow-hidden py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-light text-neutral-950">Our work</h2>
        <p class="mt-6 text-lg leading-8 text-neutral-800">
          "Empowerment of individuals is a key part of what makes open source work, since in the
          end, innovations tend to come from small groups, not from large, structured efforts." ~
          Tim O'Reilly
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <ProjectCard>
          <template #icon>
            <IconFlutter class="w-5 h-7 flex-none text-emerald-600" />
          </template>
          <template #heading>
            <h3>Flutter</h3>
          </template>
          <template #content>
            <p>
              Check out our Flutter packages on pub.dev. We have a package that creates master
              details flows, one that generates expandable cards, and many more.
            </p>
          </template>
        </ProjectCard>
        <ProjectCard>
          <template #icon>
            <IconPassword class="w-5 h-7 flex-none text-emerald-600" />
          </template>
          <template #heading>
            <h3>Polybius</h3>
          </template>
          <template #content>
            <p>
              A smart password generator. It generates an easy to remeber password based on
              relatable experiences, while still being a a complex password.
            </p>
          </template>
        </ProjectCard>
        <ProjectCard>
          <template #icon>
            <IconCode class="w-5 h-7 flex-none text-emerald-600" />
          </template>
          <template #heading>
            <h3>More</h3>
          </template>
          <template #content>
            <p>
              We can not wait to show you more of our work. We are currently working on a few more
              projects that we are excited to share with you. Checkout our GitHub for more.
            </p>
          </template>
        </ProjectCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import IconFlutter from './icons/IconFlutter.vue'
import IconCode from './icons/IconCode.vue'
import IconPassword from './icons/IconPassword.vue'
</script>
