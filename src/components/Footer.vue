<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Github, Linkedin, Twitter, Mail } from 'lucide-vue-next'
import { PORTFOLIO_DATA } from '../lib/data'

const currentYear = new Date().getFullYear()

const getIcon = (platform: string) => {
  if (platform === 'GitHub') return Github
  if (platform === 'LinkedIn') return Linkedin
  if (platform === 'Twitter') return Twitter

  return Mail
}
</script>

<template>
  <footer class="bg-slate-900 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div class="space-y-4">
          <div
            class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold">AC</span>
          </div>

          <p class="text-slate-400 text-sm">
            Creating immersive digital experiences with modern web technologies.
          </p>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li>
              <RouterLink to="/about" class="hover:text-white transition-colors">
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio" class="hover:text-white transition-colors">
                Portfolio
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blog" class="hover:text-white transition-colors">
                Blog
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Resources</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li>
              <RouterLink to="/faq" class="hover:text-white transition-colors">
                FAQ
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="hover:text-white transition-colors">
                Contact
              </RouterLink>
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Connect</h4>
          <div class="flex gap-3">
            <a
              v-for="social in PORTFOLIO_DATA.contact.social"
              :key="social.platform"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              :aria-label="social.platform"
            >
              <component :is="getIcon(social.platform)" :size="16" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400"
      >
        <p>&copy; {{ currentYear }} Alex Chen. All rights reserved.</p>

        <div class="flex gap-4 mt-4 sm:mt-0">
          <a href="#" class="hover:text-white transition-colors">Privacy</a>
          <a href="#" class="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>