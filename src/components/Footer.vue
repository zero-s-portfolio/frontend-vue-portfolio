<script setup lang="ts">
import { useGetSectionbyKey } from '@/services/section';
import {
  MapPin,
  ArrowUpRight,
  Code2,
} from 'lucide-vue-next'
import { computed } from 'vue';
import AIImage from '@/assets/images/ai.png'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Mini Games', href: '#games' },
]


const { data: keyName } = useGetSectionbyKey("name");
const nameKey = computed(() => keyName.value?.value || "Zero Sensei");
const { data: keyLocation } = useGetSectionbyKey("location");
const location = computed(() => keyLocation.value?.value || "Indonesia");
const { data: keyConnect } = useGetSectionbyKey("connect");
const connect = computed(() => keyConnect.value?.value || "Full-Stack & Robotic Developer crafting immersive web experiences, intelligent systems, and futuristic digital products.");
const { data: keyFooter } = useGetSectionbyKey("footer-description");
const footerDescription = computed(() => keyFooter.value?.value || "Engineering the future with code, creativity, and intelligent technology.");

const { data: keyGithub } = useGetSectionbyKey("github");
const github = computed(() => keyGithub.value || {id: 1, value: "Github", icon: AIImage, url: "#"});
const { data: keyLinkedin } = useGetSectionbyKey("linkedin");
const linkedin = computed(() => keyLinkedin.value || {id: 2, value: "LinkedIn", icon: AIImage, url: "#"});
const { data: keyInstagram } = useGetSectionbyKey("instagram");
const instagram = computed(() => keyInstagram.value || {id: 3, value: "Instagram", icon: AIImage, url: "#"});
const { data: keyEmail } = useGetSectionbyKey("email");
const email = computed(() => keyEmail.value || {value: "shiotazero03@gmail.com", url: "mailto:shiotazero03@gmail.com"});

const socials = computed(() => {
  return [
    github.value,
    linkedin.value,
    instagram.value
  ]
})
</script>

<template>
  <footer class="relative overflow-hidden bg-[#020617] px-4 text-white">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div class="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]" />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <div
        class="mb-14 rounded-4xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl sm:p-10 lg:p-12"
        data-aos="fade-up"
      >
        <div class="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <div class="mb-6 flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                <Code2 :size="24" />
              </div>

              <h2 class="sm:text-3xl font-black xl:text-4xl text-2xl">
                {{ nameKey }}
              </h2>
            </div>

            <p class="max-w-2xl sm:text-base text-sm leading-relaxed text-slate-300 xl:text-lg">
              {{ connect }}
            </p>
          </div>

          <div class="flex flex-col lg:gap-4 gap-2 sm:flex-row lg:justify-end">
            <a
              href="#contact"
              class="lg:text-base sm:text-sm text-xs group inline-flex items-center justify-center gap-3 lg:rounded-2xl rounded-lg bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 lg:px-6 px-4 lg:py-4 sm:py-3 py-2 font-bold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            >
              Let’s Connect
              <ArrowUpRight
                :size="20"
                class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#projects"
              class="lg:text-base sm:text-sm text-xs inline-flex items-center justify-center lg:rounded-2xl rounded-lg border border-white/10 bg-slate-800/70 lg:px-6 px-4 lg:py-4 sm:py-3 py-2 font-bold text-slate-200 transition-all duration-500 hover:border-cyan-400/50 hover:text-cyan-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      <div class="grid gap-10 border-t border-white/10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 class="mb-5 text-xl font-black">
            {{ nameKey }}
          </h3>

          <p class="mb-5 text-sm leading-relaxed text-slate-400">
            {{ footerDescription }}
          </p>

          <div class="flex items-center gap-2 text-sm text-slate-400">
            <MapPin :size="16" class="text-cyan-300" />
            {{ location }}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h3 class="mb-5 text-xl font-black">
            Navigation
          </h3>

          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <a
                :href="link.href"
                class="group inline-flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:text-cyan-300"
              >
                <span
                  class="h-1.5 w-1.5 rounded-full bg-slate-600 transition-all duration-300 group-hover:w-4 group-hover:bg-cyan-300"
                />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h3 class="mb-5 text-xl font-black">
            Services
          </h3>

          <ul class="space-y-3 text-sm text-slate-400">
            <li>Web Development</li>
            <li>Frontend Interface</li>
            <li>Backend System</li>
            <li>Robotics & AI</li>
            <li>Creative Technology</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h3 class="mb-5 text-xl font-black">
            Socials
          </h3>

          <div class="flex flex-wrap gap-3">
            <a
              v-for="social in socials"
              :key="social.id"
              :href="social.url || '#'"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-800/70 text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]"
              :aria-label="social.value || ''"
            >
              <img :src="social.icon || AIImage" :alt="social.value || ''" class="w-4 transition-transform duration-500 group-hover:rotate-12">
            </a>
          </div>

          <a
            :href="email.url || '#'"
            class="mt-6 inline-flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:text-cyan-300"
          >
            {{ email.value }}
            <ArrowUpRight :size="16" />
          </a>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row"
      >
        <p>
          © {{ currentYear }} {{ nameKey }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>