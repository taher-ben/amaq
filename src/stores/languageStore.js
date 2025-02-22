import { defineStore } from 'pinia'
export const useLanguageStore = defineStore('language', {
  state: () => ({
    locale: localStorage.getItem('locale') || 'en'
  }),
  actions: {
    setLocale(newLocale) {
      this.locale = newLocale
      localStorage.setItem('locale', newLocale)
    }
  }
})
