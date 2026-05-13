<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X, Gamepad2 } from 'lucide-vue-next'
import Logo from '@/assets/images/logo.png'

const isOpen = ref(false)
const totalPoints = ref(0)

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/games', label: 'Games' },
  { href: '/contact', label: 'Contact' },
]
</script>

<template>
  <nav class="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <RouterLink
          to="/"
          class="flex items-center gap-4 font-bold text-white text-lg hover:text-cyan-400 transition-colors"
        >
          <img :src="Logo" alt="logo" class="w-10">
          <span>Zero Sensei</span>
        </RouterLink>

        <div class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="hidden md:flex items-center gap-4">
          <div class="flex items-center gap-2 px-3 py-2 bg-slate-900 rounded-lg">
            <Gamepad2 class="w-4 h-4 text-cyan-400" />
            <span class="text-sm font-semibold text-cyan-400">{{ totalPoints }}</span>
          </div>
        </div>

        <button
          class="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
          @click="isOpen = !isOpen"
        >
          <X v-if="isOpen" class="w-5 h-5 text-slate-300" />
          <Menu v-else class="w-5 h-5 text-slate-300" />
        </button>
      </div>

      <Transition name="mobile-menu">
        <div v-if="isOpen" class="md:hidden mt-4 space-y-2 overflow-hidden">
          <RouterLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="block px-4 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
            @click="isOpen = false"
          >
            {{ link.label }}
          </RouterLink>

          <div class="flex items-center gap-2 px-4 py-2 text-cyan-400">
            <Gamepad2 class="w-4 h-4" />
            <span class="text-sm font-semibold">Points: {{ totalPoints }}</span>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  max-height: 400px;
}
</style>