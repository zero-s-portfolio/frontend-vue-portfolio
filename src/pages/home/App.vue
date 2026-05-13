<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  ArrowRight,
  Code2,
  Sparkles,
  Gamepad2,
  QrCode,
  Eye,
} from 'lucide-vue-next'
import HeroScene from '@/components/HeroScene.vue'
import HeroPlanet from '@/components/HeroPlanet.vue'
import { PORTFOLIO_DATA } from '../../lib/data'
import { onMounted, onUnmounted, ref, computed } from 'vue'

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const backgroundStyle = computed(() => ({
  transform: `translateY(${scrollY.value * 0.55}px) scale(1.12)`,
}))

const planetStyle = computed(() => ({
  transform: `translateY(${scrollY.value * 0.03}px)`,
}))

const contentStyle = computed(() => ({
  transform: `translateY(${scrollY.value * 0.0000001}px)`,
  opacity: Math.max(1 - scrollY.value / 900, 0),
}))
</script>

<template>

  <section
    class="relative w-full h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
  >
    <!-- background cepat -->
    <div
      class="absolute inset-0 will-change-transform"
      :style="backgroundStyle"
    >
      <HeroScene />
    </div>

    <div
      class="relative z-10 h-full flex items-center xl:justify-between justify-center max-w-7xl mx-auto px-4"
    >
      <!-- planet lebih pelan -->
      <div
        class="xl:relative absolute xl:left-auto xl:top-auto left-[50%] top-[50%] xl:translate-0 translate-[-50%] w-150 h-150 xl:opacity-100 opacity-50 hero-planet-motion"
        :style="planetStyle"
      >
        <HeroPlanet />
      </div>

      <!-- text hero pelan + fade -->
      <div
        class="max-w-xl xl:text-left text-center hero-content-motion"
        :style="contentStyle"
      >
        <h1
          class="text-5xl sm:text-7xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {{ PORTFOLIO_DATA.hero.name }}
        </h1>

        <p class="text-xl sm:text-2xl text-slate-300 mb-4">
          {{ PORTFOLIO_DATA.hero.title }}
        </p>

        <p class="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          {{ PORTFOLIO_DATA.hero.subtitle }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 items-center xl:justify-start justify-center">
          <RouterLink
            to="/portfolio"
            class="group inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            {{ PORTFOLIO_DATA.hero.cta }}
            <ArrowRight :size="20" class="group-hover:translate-x-1 transition-transform" />
          </RouterLink>

          <RouterLink
            to="/contact"
            class="px-8 py-3 border border-slate-500 rounded-lg font-semibold hover:border-white hover:text-white transition-colors"
          >
            Get in Touch
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 -left-1/4 w-96 h-96 bg-linear-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl orb-one"
      />
      <div
        class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-linear-to-bl from-blue-600/20 to-transparent rounded-full blur-3xl orb-two"
      />
    </div>
  </section>

  <section class="py-20 px-4 bg-slate-900 border-t border-slate-800">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">Featured Work</h2>
        <p class="text-slate-400">
          Showcasing some of my recent projects and achievements
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="project in PORTFOLIO_DATA.portfolio.slice(0, 3)"
          :key="project.id"
          class="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <div
            class="w-full h-40 bg-linear-to-br from-slate-700 to-slate-800 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow"
          >
            <Code2 :size="40" class="text-slate-500" />
          </div>

          <h3 class="font-semibold mb-2 text-lg">{{ project.title }}</h3>
          <p class="text-slate-400 text-sm mb-4">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags.slice(0, 2)"
              :key="tag"
              class="text-xs px-2 py-1 rounded bg-slate-700 text-cyan-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <RouterLink
          to="/portfolio"
          class="inline-flex items-center gap-2 px-8 py-3 border border-slate-500 rounded-lg font-semibold hover:border-white hover:text-white transition-colors"
        >
          View All Projects
          <ArrowRight :size="20" />
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="py-20 px-4 bg-slate-900 border-t border-slate-800">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">Interactive Experience</h2>
        <p class="text-slate-400">
          Jelajahi portfolio dengan cara yang menyenangkan - gunakan AR dan mainkan games!
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          class="group p-6 rounded-xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <div class="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
            <Eye class="w-6 h-6 text-cyan-400" />
          </div>
          <h3 class="font-semibold mb-2 text-lg">WebAR Viewer</h3>
          <p class="text-slate-400 text-sm mb-4">
            Lihat objek 3D interaktif langsung di browser tanpa aplikasi khusus
          </p>
          <RouterLink to="/projects" class="text-cyan-400 text-sm font-medium hover:text-cyan-300">
            Coba Sekarang →
          </RouterLink>
        </div>

        <div
          class="group p-6 rounded-xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <div class="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
            <QrCode class="w-6 h-6 text-cyan-400" />
          </div>
          <h3 class="font-semibold mb-2 text-lg">QR Scanner</h3>
          <p class="text-slate-400 text-sm mb-4">
            Scan QR codes pada project cards untuk melihat detail lengkap dalam AR
          </p>
          <RouterLink to="/projects" class="text-cyan-400 text-sm font-medium hover:text-cyan-300">
            Pelajari lebih lanjut →
          </RouterLink>
        </div>

        <div
          class="group p-6 rounded-xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <div class="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
            <Gamepad2 class="w-6 h-6 text-cyan-400" />
          </div>
          <h3 class="font-semibold mb-2 text-lg">Mini Games</h3>
          <p class="text-slate-400 text-sm mb-4">
            Mainkan 3 game seru dan kumpulkan points untuk unlock achievements!
          </p>
          <RouterLink to="/games" class="text-cyan-400 text-sm font-medium hover:text-cyan-300">
            Mainkan sekarang →
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-4 bg-linear-to-b from-slate-800 to-slate-900">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6">Ready to Work Together?</h2>
      <p class="text-xl text-slate-400 mb-8">
        Hubungi saya untuk mendiskusikan project berikutnya atau sekadar bercerita tentang teknologi favorit Anda.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <RouterLink
          to="/contact"
          class="group inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
        >
          <Sparkles :size="20" />
          Hubungi Saya
          <ArrowRight :size="20" class="group-hover:translate-x-1 transition-transform" />
        </RouterLink>

        <RouterLink
          to="/games"
          class="inline-flex items-center gap-2 px-8 py-3 border border-slate-500 rounded-lg font-semibold hover:border-white hover:text-white transition-colors"
        >
          <Gamepad2 :size="20" />
          Main Games
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-up {
  animation: fade-up 0.8s ease both;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content-motion {
  animation: hero-content-enter 900ms ease both;
  will-change: transform, opacity;
}

.hero-planet-motion {
  animation: hero-planet-enter 1100ms ease both;
  will-change: transform;
}

.orb-one {
  animation: orb-float-one 8s ease-in-out infinite alternate;
}

.orb-two {
  animation: orb-float-two 10s ease-in-out infinite alternate;
}

@keyframes hero-content-enter {
  from {
    opacity: 0;
    transform: translateY(32px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-planet-enter {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.88);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes orb-float-one {
  from {
    transform: translate(0, 0) scale(1);
  }

  to {
    transform: translate(60px, 40px) scale(1.2);
  }
}

@keyframes orb-float-two {
  from {
    transform: translate(0, 0) scale(1);
  }

  to {
    transform: translate(-60px, -40px) scale(1.15);
  }
}
</style>