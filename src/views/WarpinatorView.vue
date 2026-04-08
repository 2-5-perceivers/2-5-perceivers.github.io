<template>
  <main>
    <NavigationBar accent-color-class="text-purple-300" />
    <Header />
    <AboutSection />
    <VariantsSection />
    <DevelopmentWarning />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import Header from '@/components/warpinator/Header.vue'
import AboutSection from '@/components/warpinator/AboutSection.vue'
import VariantsSection from '@/components/warpinator/VariantsSection.vue'
import DevelopmentWarning from '@/components/warpinator/DevelopmentWarning.vue'
import Footer from '@/components/Footer.vue'
</script>
