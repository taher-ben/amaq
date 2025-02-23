import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

function loadLocaleMessages() {
  return { en, ar }
}

export function setupI18n(
  locale = localStorage.getItem('locale') || navigator.language.split('-')[0] || 'en'
) {
  return createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
  })
}
