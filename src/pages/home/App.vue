<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import HeroScene from '@/components/HeroScene.vue'
import HeroPlanet from '@/components/HeroPlanet.vue'
import AboutSection from '@/components/AboutSection.vue'
import WorkSection from '@/components/WorkSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import MiniGameSection from '@/components/MiniGameSection.vue'
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
    id="hero"
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
          Zero Sensei
        </h1>

        <p class="text-xl sm:text-2xl text-slate-300 mb-4">
          Full-Stack & Robotic Developer | Tech Creator
        </p>

        <p class="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Crafting immersive digital experiences, intelligent systems, and futuristic technology that bridges creativity with innovation.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 items-center xl:justify-start justify-center">
          <RouterLink
            to="/portfolio"
            class="group inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Explore My World
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

  <section id="about">
    <AboutSection />
  </section>
  <section id="work">
    <WorkSection />
  </section>
  <section id="projects">
    <ProjectSection />
  </section>
  <section id="contact">
    <ContactSection />
  </section>
  <section id="mini-game">
    <MiniGameSection />
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