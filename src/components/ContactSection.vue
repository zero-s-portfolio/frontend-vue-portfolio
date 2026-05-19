<script setup lang="ts">
import { useGetSectionbyKey } from '@/services/section';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  LoaderCircle
} from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue';
import AIImage from '@/assets/images/ai.png'
import { useCreateContactMessage } from '@/services/contact';
import { toast } from 'vue-sonner';
import type { AxiosError } from 'axios';

interface ValidationErrorResponse {
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

const { data: keyDescription } = useGetSectionbyKey("contact");
const description = computed(() => keyDescription.value?.value || "Let’s build something amazing together. Feel free to reach out for collaborations, projects, or discussions.");

const { data: keyEmail } = useGetSectionbyKey("email");
const email = computed(() => keyEmail.value || {value: "shiotazero03@gmail.com", url: "mailto:shiotazero03@gmail.com"});

const { data: keyPhone } = useGetSectionbyKey("phone");
const phone = computed(() => keyPhone.value || {value: "+62 822 7571 3049", url: "https://wa.me/6282275713049"});

const { data: keyLocation } = useGetSectionbyKey("location");
const location = computed(() => keyLocation.value?.value || "Indonesia");

const { data: keyGithub } = useGetSectionbyKey("github");
const github = computed(() => keyGithub.value || {id: 1, value: "Github", icon: AIImage, url: "#"});
const { data: keyLinkedin } = useGetSectionbyKey("linkedin");
const linkedin = computed(() => keyLinkedin.value || {id: 2, value: "LinkedIn", icon: AIImage, url: "#"});
const { data: keyInstagram } = useGetSectionbyKey("instagram");
const instagram = computed(() => keyInstagram.value || {id: 3, value: "Instagram", icon: AIImage, url: "#"});

const socials = computed(() => {
  return [
    {...github.value, color: 'hover:text-white'},
    {...linkedin.value, color: 'hover:text-cyan-300'},
    {...instagram.value, color: 'hover:text-pink-300'}
  ]
})

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: ""
})

const formError = ref<{
  name?: string;
  email?: string;
  subject?: string;
  message?: string
}>({});

const { mutateAsync, isPending } = useCreateContactMessage();

const handleSubmitContact = async () => {
  formError.value = {};

  try {
    await mutateAsync(form.value);
    emptyForm();
    toast.success("Pesan anda berhasil dikirim");
  } catch (error) {
    const err = error as AxiosError<ValidationErrorResponse>;
    toast.error(err?.response?.data?.message || err?.message || "Server Error");
    if(err?.response?.status === 422) {
      if(err.response.data && err.response.data.errors) {
        formError.value = err.response.data.errors;
      }
    }
  }
}

const emptyForm = () => {
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  formError.value = {}
}

onMounted(() => emptyForm);
</script>

<template>
  <section
    class="relative overflow-hidden bg-[#020617] px-4 py-20 text-white lg:py-28"
  >
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute left-0 top-0 h-105 w-105 rounded-full bg-cyan-500/10 blur-[140px]"
      />

      <div
        class="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-purple-500/10 blur-[140px]"
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
          {{ description }}
        </p>
      </div>

      <div
        class="grid gap-8 md:grid-cols-[1fr_1.2fr]"
      >
        <!-- LEFT -->
        <div
          class="lg:space-y-6 space-y-4"
          data-aos="fade-right"
        >
          <!-- Contact Cards -->
          <div
            class="group lg:rounded-[28px] rounded-[14px] border border-white/10 bg-slate-900/70 sm:p-6 p-4 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
          >
            <div class="flex items-start gap-5">
              <div
                class="flex sm:h-14 sm:w-14 h-12 w-12 shrink-0 items-center justify-center sm:rounded-2xl rounded-lg bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              >
                <Mail :size="24" />
              </div>

              <div>
                <h3 class="sm:mb-2 lg:text-xl sm:text-lg text-base font-black">
                  Email
                </h3>

                <a :href="email.url || '#'" target="_blank" rel="noopener noreferrer" class="text-slate-300 lg:text-base sm:text-sm text-xs">
                  {{ email.value }}
                </a>
              </div>
            </div>
          </div>

          <div
            class="group lg:rounded-[28px] rounded-[14px] border border-white/10 bg-slate-900/70 sm:p-6 p-4 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
          >
            <div class="flex items-start gap-5">
              <div
                class="flex sm:h-14 sm:w-14 h-12 w-12 shrink-0 items-center justify-center sm:rounded-2xl rounded-lg bg-purple-400/10 text-purple-300 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
              >
                <Phone :size="24" />
              </div>

              <div>
                <h3 class="sm:mb-2 lg:text-xl sm:text-lg text-base font-black">
                  Phone
                </h3>

                <a :href="phone.url || '#'" target="_blank" rel="noopener noreferrer" class="text-slate-300 lg:text-base sm:text-sm text-xs">
                  {{ phone.value }}
                </a>
              </div>
            </div>
          </div>

          <div
            class="group lg:rounded-[28px] rounded-[14px] border border-white/10 bg-slate-900/70 sm:p-6 p-4 backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          >
            <div class="flex items-start gap-5">
              <div
                class="flex sm:h-14 sm:w-14 h-12 w-12 shrink-0 items-center justify-center sm:rounded-2xl rounded-lg bg-emerald-400/10 text-emerald-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              >
                <MapPin :size="24" />
              </div>

              <div>
                <h3 class="sm:mb-2 mb-1 lg:text-xl sm:text-lg text-base font-black">
                  Location
                </h3>

                <p class="text-slate-300 lg:text-base sm:text-sm text-xs">
                  {{ location }}
                </p>
              </div>
            </div>
          </div>

          <!-- Social -->
          <div
            class="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl"
          >
            <h3 class="mb-6 lg:text-2xl sm:text-xl text-lg font-black">
              Connect With Me
            </h3>

            <div class="flex flex-wrap lg:gap-4 gap-2">
              <a
                v-for="social in socials"
                :key="social.id"
                :href="social.url || '#'"
                target="_blank"
                rel="noopener noreferrer"
                class="group/social flex sm:h-14 h-12 sm:w-14 w-12 items-center justify-center sm:rounded-2xl rounded-lg border border-white/10 bg-slate-800/70 text-slate-300 transition-all duration-500 hover:scale-110 hover:border-cyan-400/40 hover:bg-slate-700"
                :class="social.color"
              >
                <img :src="social.icon || AIImage" :alt="social.value || ''" class="lg:w-6 w-4">
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div
          class="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 backdrop-blur-xl"
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

          <form @submit.prevent="handleSubmitContact" class="relative z-10 p-7 sm:p-10 lg:p-12">
            <div class="mb-8">
              <h3 class="mb-3 text-3xl font-black">
                Send Message
              </h3>

              <p class="text-slate-300">
                Have an idea or project? Let’s talk.
              </p>
            </div>

            <div class="grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2">
              <div class="group">
                <label
                  class="mb-3 block text-sm font-semibold text-slate-300"
                >
                  Your Name
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  :class="[
                    'w-full rounded-2xl border bg-slate-800/70 px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-slate-500',
                    formError.name
                      ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                      : 'border-white/10 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                  ]"
                >
                <small v-if="formError.name" class="italic text-red-500 md:text-xs text-[10px]">{{ formError.name }}</small>
              </div>

              <div class="group">
                <label
                  class="mb-3 block text-sm font-semibold text-slate-300"
                >
                  Email Address
                </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  :class="[
                    'w-full rounded-2xl border bg-slate-800/70 px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-slate-500',
                    formError.email
                      ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                      : 'border-white/10 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                  ]"
                >
                <small v-if="formError.email" class="italic text-red-500 md:text-xs text-[10px]">{{ formError.email }}</small>
              </div>
            </div>

            <div class="mt-6">
              <label
                class="mb-3 block text-sm font-semibold text-slate-300"
              >
                Subject
              </label>

              <input
                v-model="form.subject"
                type="text"
                placeholder="Project Collaboration"
                :class="[
                  'w-full rounded-2xl border bg-slate-800/70 px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-slate-500',
                  formError.subject
                    ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                    : 'border-white/10 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                ]"
              >
              <small v-if="formError.subject" class="italic text-red-500 md:text-xs text-[10px]">{{ formError.subject }}</small>
            </div>

            <div class="mt-6">
              <label
                class="mb-3 block text-sm font-semibold text-slate-300"
              >
                Message
              </label>

              <textarea
                v-model="form.message"
                rows="6"
                placeholder="Write your message..."
                :class="[
                  'w-full rounded-2xl border bg-slate-800/70 px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-slate-500',
                  formError.message
                    ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                    : 'border-white/10 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                ]"
              />
              <small v-if="formError.message" class="italic text-red-500 md:text-xs text-[10px]">{{ formError.message }}</small>
            </div>

            <!-- Button -->
            <button
              type="submit"
              :disabled="isPending"
              class="cursor-pointer lg:text-base sm:text-sm text-xs group/button mt-8 inline-flex items-center justify-center gap-3 overflow-hidden lg:rounded-2xl rounded-lg bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 lg:px-6 px-4 lg:py-4 sm:py-3 py-2 font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
            >
              <template v-if="isPending">
                <LoaderCircle
                  :size="16"
                  class="animate-spin"
                />

                <span>
                  Sending...
                </span>
              </template>

              <template v-else>
                <span>
                  Send Message
                </span>

                <Send
                  :size="12"
                  class="transition-transform duration-500 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                />
              </template>
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