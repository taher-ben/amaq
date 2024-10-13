// main.js

import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@/includes/Icons'
import validate from '@/includes/ValidationForm'

// component
import PageHead from './components/PageHead.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(validate)

app.component('PageHead', PageHead)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
