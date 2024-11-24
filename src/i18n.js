import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

function loadLocaleMessages() {
  const locales = { en, ar }
  const messages = {}
  for (const [key, value] of Object.entries(locales)) {
    messages[key] = value
  }
  return messages
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})
