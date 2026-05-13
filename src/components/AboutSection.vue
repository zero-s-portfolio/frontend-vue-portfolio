<script setup lang="ts">

import { SkillData } from '@/constants/data'

const topItems = SkillData.slice(0, Math.ceil(SkillData.length / 2))
const bottomItems = SkillData.slice(Math.ceil(SkillData.length / 2))

const handleMouseMove = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()

  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -7
  const rotateY = ((x - centerX) / centerX) * 7

  card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.025)`
}

const handleMouseLeave = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement
  card.style.transform =
    'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)'
}
</script>

<template>
  <section class="relative overflow-hidden bg-[#020617] py-16 sm:py-20 lg:py-24 px-4 text-white h-full">
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute left-1/2 top-1/2 h-80 w-80 sm:h-110 sm:w-110 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]"
      />
      <div
        class="absolute bottom-0 left-0 h-60 w-60 sm:h-75 sm:w-75 rounded-full bg-blue-700/20 blur-[90px]"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <div class="text-center mb-10 sm:mb-14 lg:mb-16" data-aos="fade-up">
        <h2 class="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 sm:mb-8">
          ABOUT ME
        </h2>

        <p class="max-w-4xl mx-auto text-base sm:text-lg lg:text-2xl leading-relaxed text-indigo-200">
          I have an interest in mathematics education, web application development, and robotics.
          My dream is to create intelligent technology that understands human feelings.
        </p>
      </div>

      <div class="space-y-5 sm:space-y-6">
        <div class="about-carousel">
          <div class="about-track scroll-left">
            <div
              v-for="(item, index) in [...topItems, ...topItems, ...topItems]"
              :key="`top-${item.title}-${index}`"
              class="about-card group"
              @mousemove="handleMouseMove"
              @mouseleave="handleMouseLeave"
              data-aos="fade-right"
              :data-aos-delay="500 * (index + 1)"
            >
              <div
                class="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-cyan-400/0 via-cyan-400/20 to-blue-600/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div class="relative z-10 flex items-center gap-4 sm:gap-5">
                <div
                  class="h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-xl sm:rounded-2xl bg-black p-2 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                >
                  <img :src="item.image" :alt="item.title" class="h-full w-full object-contain" />
                </div>

                <h3 class="text-sm sm:text-base lg:text-lg font-black leading-snug">
                  {{ item.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="about-carousel">
          <div class="about-track scroll-right">
            <div
              v-for="(item, index) in [...bottomItems, ...bottomItems, ...bottomItems]"
              :key="`bottom-${item.title}-${index}`"
              class="about-card group flex items-center"
              @mousemove="handleMouseMove"
              @mouseleave="handleMouseLeave"
              data-aos="fade-left"
              :data-aos-delay="500 * (index + 1)"
            >
              <div
                class="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-purple-400/0 via-purple-400/20 to-cyan-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div class="relative z-10 flex items-center gap-4 sm:gap-5">
                <div
                  class="h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-xl sm:rounded-2xl bg-black p-2 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                >
                  <img :src="item.image" :alt="item.title" class="h-full w-full object-contain" />
                </div>

                <h3 class="text-sm sm:text-base lg:text-lg font-black leading-snug">
                  {{ item.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-carousel {
  width: 100%;
  overflow: hidden;
  padding: 8px 0;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.about-track {
  display: flex;
  width: max-content;
  gap: 16px;
}

.scroll-left {
  animation: scroll-left 26s linear infinite;
}

.scroll-right {
  animation: scroll-right 26s linear infinite;
}

.about-card {
  position: relative;
  width: 230px;
  min-height: 86px;
  flex-shrink: 0;
  border-radius: 18px;
  border: 1px solid rgba(34, 211, 238, 0.75);
  background: rgba(2, 6, 23, 0.72);
  padding: 14px;
  transition:
    transform 160ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease,
    background 300ms ease;
  transform-style: preserve-3d;
  cursor: pointer;
}

.about-card:hover {
  border-color: #67e8f9;
  background: rgba(15, 23, 42, 0.92);
  box-shadow:
    0 0 14px rgba(34, 211, 238, 0.45),
    0 0 30px rgba(37, 99, 235, 0.28),
    inset 0 0 12px rgba(34, 211, 238, 0.08);
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-33.333%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-33.333%);
  }

  to {
    transform: translateX(0);
  }
}

@media (min-width: 640px) {
  .about-track {
    gap: 20px;
  }

  .about-card {
    width: 280px;
    min-height: 96px;
    border-radius: 22px;
    padding: 16px;
  }
}

@media (min-width: 1024px) {
  .about-track {
    gap: 24px;
  }

  .about-card {
    width: 320px;
    min-height: 108px;
    padding: 18px;
  }
}

@media (max-width: 480px) {
  .scroll-left,
  .scroll-right {
    animation-duration: 20s;
  }

  .about-card {
    width: 210px;
  }
}
</style>