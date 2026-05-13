<script setup lang="ts">
import { ref } from 'vue'

import ProjectImage from '@/assets/images/artificial.png'

const hoveredIndex = ref<number | null>(null)

const projects = [
  {
    title: 'Zero AI Platform',
    category: 'Artificial Intelligence',
    image: ProjectImage,
    hoverImage: ProjectImage,
    description:
      'AI-powered dashboard with futuristic automation and intelligent systems.',
    hoverDescription:
      'Built with immersive UI motion, realtime interaction, and modern AI workflows.',
    stack: ['Vue', 'TypeScript', 'Tailwind', 'AI'],
    year: '2025',
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
  },
  {
    title: 'Virtual Laboratory',
    category: '3D Education',
    image: ProjectImage,
    hoverImage: ProjectImage,
    description:
      'Interactive educational virtual laboratory experience.',
    hoverDescription:
      'Combining immersive learning with futuristic 3D rendering technologies.',
    stack: ['Three.js', 'Vue', 'A-Frame'],
    year: '2025',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
  },
  {
    title: 'Robotics Dashboard',
    category: 'Robotics',
    image: ProjectImage,
    hoverImage: ProjectImage,
    description:
      'Realtime robotic monitoring and futuristic dashboard system.',
    hoverDescription:
      'Designed for intelligent robotic control with responsive realtime visualization.',
    stack: ['Vue', 'Express', 'Socket.io'],
    year: '2024',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
  },
  {
    title: 'Portfolio Experience',
    category: 'Creative Development',
    image: ProjectImage,
    hoverImage: ProjectImage,
    description:
      'Interactive cinematic portfolio with 3D and smooth animations.',
    hoverDescription:
      'Modern portfolio experience inspired by premium creative agencies.',
    stack: ['Vue', 'Three.js', 'AOS'],
    year: '2025',
    gradient: 'from-emerald-500 via-cyan-500 to-blue-500',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-[#020617] py-20 lg:py-28 text-white">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute left-0 top-0 h-105 w-105 rounded-full bg-cyan-500/10 blur-[140px]"
      />

      <div
        class="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-purple-500/10 blur-[140px]"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4">
      <!-- Header -->
      <div class="mb-16 text-center lg:mb-24" data-aos="fade-up">
        <h2
          class="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl"
        >
          FEATURED PROJECTS
        </h2>

        <p
          class="mx-auto max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl"
        >
          A showcase of immersive web applications, intelligent systems,
          and futuristic digital experiences.
        </p>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card group"
          :data-aos="index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'"
          :data-aos-delay="index * 150"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <!-- Glow -->
          <div
            class="absolute inset-0 rounded-4xl opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100"
          >
            <div
              class="h-full w-full rounded-4xl bg-linear-to-br"
              :class="project.gradient"
              style="opacity: 0.22"
            />
          </div>

          <!-- Main -->
          <div
            class="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 backdrop-blur-xl transition-all duration-700 group-hover:border-cyan-400/50"
          >
            <!-- Image -->
            <div class="relative h-75 overflow-hidden">
              <!-- Main Image -->
              <img
                :src="project.image"
                :alt="project.title"
                class="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                :class="hoveredIndex === index
                  ? 'scale-125 opacity-0 rotate-6 blur-md'
                  : 'scale-100 opacity-100'"
              >

              <!-- Hover Image -->
              <img
                :src="project.hoverImage"
                :alt="project.title"
                class="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                :class="hoveredIndex === index
                  ? 'scale-110 opacity-100'
                  : 'scale-90 opacity-0'"
              >

              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"
              />

              <!-- Floating Gradient -->
              <div
                class="absolute -bottom-16 -left-16 h-72 w-72 rounded-full blur-[100px]"
                :class="`bg-linear-to-br ${project.gradient}`"
                style="opacity: 0.4"
              />

              <!-- Floating Year -->
              <div
                class="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-bold backdrop-blur-xl"
              >
                {{ project.year }}
              </div>
            </div>

            <!-- Content -->
            <div class="relative z-10 p-7 sm:p-8">
              <!-- Category -->
              <div
                class="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300"
              >
                {{ project.category }}
              </div>

              <!-- Animated Title -->
              <div class="relative mb-5 overflow-hidden">
                <Transition name="slide-up" mode="out-in">
                  <h3
                    :key="hoveredIndex === index ? `${project.title}-hover` : project.title"
                    class="text-3xl font-black leading-tight"
                  >
                    {{
                      hoveredIndex === index
                        ? 'Explore Project'
                        : project.title
                    }}
                  </h3>
                </Transition>
              </div>

              <!-- Animated Description -->
              <div class="relative min-h-20 overflow-hidden">
                <Transition name="fade-slide" mode="out-in">
                  <p
                    :key="hoveredIndex === index ? `${project.title}-desc-hover` : `${project.title}-desc`"
                    class="text-base leading-relaxed text-slate-300"
                  >
                    {{
                      hoveredIndex === index
                        ? project.hoverDescription
                        : project.description
                    }}
                  </p>
                </Transition>
              </div>

              <!-- Stack -->
              <div class="mt-7 flex flex-wrap gap-3">
                <div
                  v-for="tech in project.stack"
                  :key="tech"
                  class="rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300"
                >
                  {{ tech }}
                </div>
              </div>

              <!-- Footer -->
              <div class="mt-8 flex items-center justify-between">
                <button
                  class="rounded-xl bg-linear-to-r px-6 py-3 font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  :class="project.gradient"
                >
                  View Project
                </button>

                <button
                  class="group/link flex items-center gap-2 text-sm font-semibold text-slate-400 transition-all duration-300 hover:text-cyan-300"
                >
                  Source Code

                  <span
                    class="transition-transform duration-300 group-hover/link:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
            </div>

            <!-- Shine -->
            <div class="shine" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  position: relative;
  transform-style: preserve-3d;
  transition:
    transform 600ms ease,
    filter 600ms ease;
}

.project-card:hover {
  transform:
    translateY(-12px)
    rotateX(5deg)
    rotateY(-5deg)
    scale(1.015);
}

.shine {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.shine::before {
  content: '';
  position: absolute;
  top: -120%;
  left: -120%;
  width: 70%;
  height: 260%;
  background:
    linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.18),
      transparent
    );

  transform: rotate(24deg);
  transition: all 1100ms ease;
}

.project-card:hover .shine::before {
  left: 180%;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 350ms ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 350ms ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

@media (max-width: 768px) {
  .project-card:hover {
    transform:
      translateY(-6px)
      scale(1.01);
  }
}
</style>