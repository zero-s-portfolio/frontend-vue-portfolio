<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue';
import { Toaster } from './components/ui/sonner';
import 'vue-sonner/style.css'
</script>

<template>
  <Toaster richColors />
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>