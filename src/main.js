import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { setupI18n } from './i18n' // ✅ استيراد `setupI18n` بدلًا من `i18n`
import { useLanguageStore } from './stores/languageStore'

import { FontAwesomeIcon } from '@/includes/Icons'
import validate from '@/includes/ValidationForm'

import PageHead from './components/PageHead.vue'
import MainButton from './components/MainButton.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// ✅ الآن يمكننا استخدام Pinia بأمان
const languageStore = useLanguageStore()
const i18n = setupI18n(languageStore.locale) // ✅ تمرير اللغة من Pinia إلى i18n

app.use(i18n)
app.use(router)

app.config.globalProperties.$axios = axios
app.use(validate)

app.component('PageHead', PageHead)
app.component('MainButton', MainButton)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
