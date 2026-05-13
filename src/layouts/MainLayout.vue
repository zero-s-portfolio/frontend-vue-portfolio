<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <Navigation />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>