import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

function loadLocaleMessages() {
  return { en, ar }
}

// تأخير تعيين اللغة حتى يتم تحميل Pinia
export function setupI18n(locale = 'en') {
  return createI18n({
    legacy: false,
    locale: locale, // تحديد اللغة عند التهيئة
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
  })
}
