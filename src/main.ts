import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import { routes } from '@/router/routes.ts'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app')
