import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.route'
import { TresCanvas } from '@tresjs/core'
import 'aos/dist/aos.css'
import { VueQueryPlugin } from "@tanstack/vue-query";
import { queryClient } from "./lib/query";

createApp(App)
    .use(router)
    .use(VueQueryPlugin, {
      queryClient,
    })
    .component('TresCanvas', TresCanvas)
    .mount('#app')
