import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.route'
import { TresCanvas } from '@tresjs/core'

createApp(App)
    .use(router)
    .component('TresCanvas', TresCanvas)
    .mount('#app')
