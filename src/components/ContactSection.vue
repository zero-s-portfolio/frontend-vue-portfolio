<script setup lang="ts">
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-vue-next'

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    url: '#',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: '#',
    color: 'hover:text-cyan-300',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: '#',
    color: 'hover:text-pink-300',
  },
]
</script>

<template>
  <section
    class="relative overflow-hidden bg-[#020617] px-4 py-20 text-white lg:py-28"
  >
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]"
      />

      <div
        class="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- Header -->
      <div class="mb-16 text-center lg:mb-24" data-aos="fade-up">
        <h2
          class="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl"
        >
          CONTACT ME
        </h2>

        <p
          class="mx-auto max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl"
        >
          Let’s build something amazing together.
          Feel free to reach out for collaborations, projects, or discussions.
        </p>
      </div>

      <div
        class="grid gap-8 lg:grid-cols-[1fr_1.2fr]"
      >
        <!-- LEFT -->
        <div
          class="space-y-6"
          data-aos="fade-right"
        >
          <!-- Contact Cards -->
          <div
            class="group rounded-[28px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
          >
            <div class="flex items-start gap-5">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              >
                <Mail :size="24" />
              </div>

              <div>
                <h3 class="mb-2 text-xl font-black">
                  Email
                </h3>

                <p class="text-slate-300">
                  zerosensei@example.com
                </p>
              </div>
            </div>
          </div>

          <div
            class="group rounded-[28px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
          >
            <div class="flex items-start gap-5">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-400/10 text-purple-300 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
              >
                <Phone :size="24" />
              </div>

              <div>
                <h3 class="mb-2 text-xl font-black">
                  Phone
                </h3>

                <p class="text-slate-300">
                  +62 812-3456-7890
                </p>
              </div>
            </div>
          </div>

          <div
            class="group rounded-[28px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          >
            <div class="flex items-start gap-5">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              >
                <MapPin :size="24" />
              </div>

              <div>
                <h3 class="mb-2 text-xl font-black">
                  Location
                </h3>

                <p class="text-slate-300">
                  Indonesia
                </p>
              </div>
            </div>
          </div>

          <!-- Social -->
          <div
            class="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl"
          >
            <h3 class="mb-6 text-2xl font-black">
              Connect With Me
            </h3>

            <div class="flex flex-wrap gap-4">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="group/social flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-800/70 text-slate-300 transition-all duration-500 hover:scale-110 hover:border-cyan-400/40 hover:bg-slate-700"
                :class="social.color"
              >
                <component
                  :is="social.icon"
                  :size="24"
                  class="transition-transform duration-500 group-hover/social:rotate-12"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div
          class="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 backdrop-blur-xl"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <!-- Glow -->
          <div
            class="absolute inset-0 opacity-0 transition-opacity duration-700 hover:opacity-100"
          >
            <div
              class="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"
            />
          </div>

          <form class="relative z-10 p-7 sm:p-10 lg:p-12">
            <div class="mb-8">
              <h3 class="mb-3 text-3xl font-black">
                Send Message
              </h3>

              <p class="text-slate-300">
                Have an idea or project? Let’s talk.
              </p>
            </div>

            <div class="grid gap-6 sm:grid-cols-2">
              <div class="group">
                <label
                  class="mb-3 block text-sm font-semibold text-slate-300"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  class="w-full rounded-2xl border border-white/10 bg-slate-800/70 px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                >
              </div>

              <div class="group">
                <label
                  class="mb-3 block text-sm font-semibold text-slate-300"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  class="w-full rounded-2xl border border-white/10 bg-slate-800/70 px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                >
              </div>
            </div>

            <div class="mt-6">
              <label
                class="mb-3 block text-sm font-semibold text-slate-300"
              >
                Subject
              </label>

              <input
                type="text"
                placeholder="Project Collaboration"
                class="w-full rounded-2xl border border-white/10 bg-slate-800/70 px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              >
            </div>

            <div class="mt-6">
              <label
                class="mb-3 block text-sm font-semibold text-slate-300"
              >
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                class="w-full resize-none rounded-2xl border border-white/10 bg-slate-800/70 px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              />
            </div>

            <!-- Button -->
            <button
              type="submit"
              class="group/button mt-8 inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-4 font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            >
              <span>
                Send Message
              </span>

              <Send
                :size="18"
                class="transition-transform duration-500 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
              />
            </button>
          </form>

          <!-- Shine -->
          <div class="shine" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
      rgba(255,255,255,0.15),
      transparent
    );

  transform: rotate(25deg);
  transition: all 1200ms ease;
}

:hover > .shine::before {
  left: 180%;
}

@media (max-width: 768px) {
  .shine {
    display: none;
  }
}
</style>