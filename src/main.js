import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import i18n from './i18n'

import { FontAwesomeIcon } from '@/includes/Icons'
import validate from '@/includes/ValidationForm'

import PageHead from './components/PageHead.vue'
import MainButton from './components/MainButton.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.config.globalProperties.$axios = axios
app.use(validate)

app.component('PageHead', PageHead)
app.component('MainButton', MainButton)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
