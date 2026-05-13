<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue';
import { Toaster } from './components/ui/sonner';
import 'vue-sonner/style.css'
import AOS from 'aos'
import { onMounted, onUnmounted } from 'vue';
import Lenis from 'lenis'

let lenis: Lenis

onMounted(() => {
  AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
    mirror: true,
    offset: 120,
  })

  lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.5,
    infinite: false,
  })

  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  lenis?.destroy()
})

</script>

<template>
  <Toaster richColors />
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>