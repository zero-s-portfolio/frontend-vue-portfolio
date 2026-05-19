<script setup lang="ts">
import { useGetSectionbyKey } from '@/services/section';
import { useGetAllWork } from '@/services/works';
import { computed } from 'vue';

const { data: keyDescription } = useGetSectionbyKey("work-experience");
const descriptionKey = computed(() => keyDescription.value?.value || "My journey in technology, innovation, and creative digital development.");

const { data: workData } = useGetAllWork();
const experiences = computed(() => workData.value || []);
</script>

<template>
  <section class="relative overflow-hidden bg-[#020617] py-20 lg:py-28 px-4 text-white">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div
        class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]"
      />
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16 lg:mb-24" data-aos="fade-up">
        <h2 class="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6">
          WORK EXPERIENCE
        </h2>

        <p class="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
          {{ descriptionKey }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Line -->
        <div
          class="absolute left-4.5 sm:left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-cyan-400 via-blue-500 to-purple-500 sm:-translate-x-1/2"
        />

        <div class="space-y-12 lg:space-y-20">
          <div
            v-for="(item, index) in experiences"
            :key="item.company"
            class="relative flex sm:items-center"
            :class="index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 180"
          >
            <!-- Dot -->
            <div
              class="absolute left-2.5 sm:left-1/2 top-8 sm:top-1/2 z-20 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)] sm:-translate-x-1/2 sm:-translate-y-1/2"
            />

            <!-- Card -->
            <div
              class="ml-14 sm:ml-0 w-full sm:w-[46%] group"
            >
              <div
                class="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl p-4 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
              >
                <!-- Glow -->
                <div
                  class="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <div
                    class="absolute inset-0 bg-linear-to-br from-cyan-400/5 via-transparent to-purple-500/5"
                  />
                </div>

                <div class="relative z-10">
                  <!-- Top -->
                  <div
                    class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6"
                  >
                    <div>
                      <h3 class="lg:text-2xl sm:text-xl text-lg font-black text-white">
                        {{ item.role }}
                      </h3>

                      <p class="text-cyan-400 font-semibold lg:text-base sm:text-sm text-xs">
                        {{ item.company }}
                      </p>
                    </div>

                    <div
                      class="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 sm:px-4 px-2 sm:py-2 py-1 lg:text-sm sm:text-xs text-[10px] font-semibold text-cyan-300"
                    >
                      {{ item.period }}
                    </div>
                  </div>

                  <!-- Desc -->
                  <div class="vhtml text-slate-300 leading-relaxed mb-6 lg:text-base sm:text-sm text-xs" v-html="item.description" />

                  <!-- Skills -->
                  <div class="flex flex-wrap sm:gap-3 gap-2">
                    <div
                      v-for="skill in item.skill"
                      :key="skill.id"
                      class="rounded-full border border-slate-700 bg-slate-800/70 sm:px-4 px-2 sm:py-2 py-1 lg:text-sm sm:text-xs text-[10px] font-medium text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300"
                    >
                      {{ skill.skillName }}
                    </div>
                  </div>
                </div>

                <!-- Hover border -->
                <div
                  class="absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-cyan-400/40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>