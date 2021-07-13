import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/main'
import router from '@/routers'
createApp(App).use(components).use(router).mount('#app')
