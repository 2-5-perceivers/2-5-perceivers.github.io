<template>
  <div class="relative px-6 lg:px-8">
    <div class="bg-purple-950/80 rounded-full h-1 mx-auto max-w-lg lg:max-w-4xl" />
    <div class="mx-auto mt-24 grid max-w-lg sm:mt-32 sm:gap-y-0 lg:max-w-4xl">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Clients</h1>
      <h2 class="mt-6 text-2xl leading-8 font-semibold text-purple-700">Warpinator Perceivers</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Warpinator Perceivers is our implementation of Warpinator, designed to be a modern,
        lightweight alternative to the original application. Running on Linux, MacOS, and Windows.
        <a
          href="https://github.com/2-5-perceivers/warpinator-tauri"
          class="text-purple-600 hover:text-purple-800"
          >Learn more</a
        >.
      </p>
      <img
        class="mt-6 rounded-lg lg:rounded-2xl shadow-2xl shadow-black"
        src="@/assets/images/warpinator_screenshots/tauri.png"
        alt="Warpinator Tauri screenshot"
      />

      <h2 class="mt-12 text-2xl leading-8 font-semibold text-purple-700">Warpinator Terminal</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Warpinator Terminal is a command-line interface (CLI) client for Warpinator, designed for
        headless devices.
        <a
          href="https://github.com/2-5-perceivers/warpinator-lib"
          class="text-purple-600 hover:text-purple-800"
          >Learn more</a
        >.
      </p>
      <img
        class="mt-6 rounded-lg lg:rounded-2xl shadow-2xl shadow-black"
        src="@/assets/images/warpinator_screenshots/terminal.png"
        alt="Warpinator Terminal screenshot"
      />

      <h2 class="mt-12 text-2xl leading-8 font-semibold text-purple-700">Warpinator Android</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Warpinator Android is an Android client for Warpinator, designed to allow file transfers
        between Android devices and other Warpinator clients.
        <a
          href="https://github.com/2-5-perceivers/warpinator-android"
          class="text-purple-600 hover:text-purple-800"
          >Learn more</a
        >.
      </p>
      <div
        class="py-6 flex flex-row gap-4 overflow-x-auto sm:overflow-x-visible flex-nowrap px-4 sm:px-0"
      >
        <img
          class="rounded-lg lg:rounded-2xl shadow-lg lg:shadow-2xl lg:shadow-black w-[60vw] sm:w-auto sm:flex-1 sm:min-w-0 shrink-0 sm:shrink sm:max-w-[32%]"
          src="@/assets/images/warpinator_screenshots/android1.png"
          alt="Warpinator Android screenshot"
        />
        <img
          class="rounded-lg lg:rounded-2xl shadow-lg lg:shadow-2xl lg:shadow-black w-[60vw] sm:w-auto sm:flex-1 sm:min-w-0 shrink-0 sm:shrink sm:max-w-[32%]"
          src="@/assets/images/warpinator_screenshots/android2.png"
          alt="Warpinator Android screenshot"
        />
        <img
          class="rounded-lg lg:rounded-2xl shadow-lg lg:shadow-2xl lg:shadow-black w-[60vw] sm:w-auto sm:flex-1 sm:min-w-0 shrink-0 sm:shrink sm:max-w-[32%]"
          src="@/assets/images/warpinator_screenshots/android3.png"
          alt="Warpinator Android screenshot"
        />
      </div>

      <h2 class="mt-12 text-2xl leading-8 font-semibold text-purple-700">Others</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Also take a look at the other implementations of Warpinator. Especially the
        <a
          href="https://github.com/linuxmint/warpinator"
          class="text-purple-600 hover:text-purple-800"
          >original</a
        >
        by the Linux Mint team and
        <a
          href="https://github.com/slowscript/warpinator-android"
          class="text-purple-600 hover:text-purple-800"
          >slowscript's Android port</a
        >
      </p>
    </div>
  </div>
</template>
