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
        <ProjectCard to="/#/warpinator">
          <template #icon>
            <HugeiconsIcon :icon="SharedWifiIcon" class="size-5 text-emerald-600" />
          </template>
          <template #heading>
            <h3>Warpinator</h3>
          </template>
          <template #content>
            <p>
              Our Warpinator projects are our spin on the popular local network file sharing app.
              Focused on performance and a seamless experience, it's the best way to share files on
              your local network.
            </p>
          </template>
        </ProjectCard>
        <ProjectCard to="https://github.com/orgs/2-5-perceivers/repositories?q=flutter+package">
          <template #icon>
            <HugeiconsIcon :icon="PackageIcon" class="size-5 text-emerald-600" />
          </template>
          <template #heading>
            <h3>Flutter packages</h3>
          </template>
          <template #content>
            <p>
              Check out our Flutter packages on pub.dev. We have a package that creates master
              details flows, one that generates expandable cards, and many more.
            </p>
          </template>
        </ProjectCard>
        <ProjectCard to="/polybius">
          <template #icon>
            <HugeiconsIcon :icon="PasswordValidationIcon" class="size-5 text-emerald-600" />
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { PackageIcon, PasswordValidationIcon, SharedWifiIcon } from '@hugeicons/core-free-icons'
import ProjectCard from './ProjectCard.vue'
</script>
