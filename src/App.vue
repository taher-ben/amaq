<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useLanguageStore } from '@/stores/languageStore'
import { useI18n } from 'vue-i18n'

const languageStore = useLanguageStore()
const router = useRouter()
const { locale } = useI18n()

const isOpen = ref(false)
const date = new Date().getFullYear()

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const toggleLanguage = () => {
  const newLocale = languageStore.locale === 'ar' ? 'en' : 'ar'
  languageStore.setLocale(newLocale)
  locale.value = newLocale
  router.push(`/${newLocale}/home`)
}

const direction = computed(() => (languageStore.locale === 'ar' ? 'rtl' : 'ltr'))
</script>

<template>
  <header>
    <nav class="bg-gray-200 border-gray-200 py-2.5 relative w-full" :dir="direction">
      <div class="flex lg:flex-wrap justify-between items-center container mx-auto">
        <RouterLink :to="`/${languageStore.locale}/home`" class="flex items-center">
          <img src="./assets/logo.png" class="mr-3 w-64" alt="Logo" />
        </RouterLink>
        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-gray-600 focus:outline-none">
            <font-awesome-icon
              class="transition ease-in-out delay-300 text-xl"
              v-if="isOpen"
              :icon="['fas', 'bars']"
            />
            <font-awesome-icon
              class="transition ease-in-out delay-300 text-xl"
              v-else
              :icon="['fas', 'bars-staggered']"
            />
          </button>
        </div>
        <div
          :class="{ hidden: !isOpen, flex: isOpen }"
          class="flex- max-lg:absolute max-lg:w-full left-0 m-0 top-full bg-gray-200 lg:flex lg:flex-row lg:space-x-8 lg:mt-0 lg:w-auto z-20"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col lg:flex-row lg:divide-y-0 divide-y-1 divide-gray-400 w-full h-full px-2"
          >
            <li>
              <RouterLink :to="`/${languageStore.locale}/home`" class="nav-link">
                {{ $t('home') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="`/${languageStore.locale}/service`" class="nav-link">
                {{ $t('Services') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="`/${languageStore.locale}/QHEPPolicy`" class="nav-link">
                {{ $t('ourpooicies') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="`/${languageStore.locale}/news`" class="nav-link">
                {{ $t('News_and_Activities') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="`/${languageStore.locale}/SustainableDevelopment`" class="nav-link">
                {{ $t('sustainable_development') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="`/${languageStore.locale}/ContactUS`" class="nav-link">
                {{ $t('contact us') }}
              </RouterLink>
            </li>
            <li>
              <button @click="toggleLanguage" class="nav-link">
                <font-awesome-icon :icon="['fas', 'globe']" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div :dir="direction">
    <RouterView />
  </div>

  <footer class="bg-black pt-6 pb-4" :dir="direction">
    <div class="container mx-auto divide-y">
      <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 items-center">
        <div class="lg:col-span-2">
          <img class="w-128" src="../image/whitelogo.png" alt="Logo" />
        </div>
        <div class="max_md:flex max_md:flex-col max_md:items-center max_md:py-2 mx-auto">
          <ul>
            <li>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                {{ $t('footer.importantLinks') }}
              </h2>
            </li>
            <li>
              <RouterLink
                :to="`/${languageStore.locale}/home`"
                class="router-link-exact-active hover:underline text-white"
              >
                {{ $t('footer.home') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="`/${languageStore.locale}/news`"
                class="router-link-exact-active hover:underline text-white"
              >
                {{ $t('footer.newsAndActivities') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li class="footer-item">
              <font-awesome-icon class="icon-location" :icon="['fas', 'location-dot']" />
              <div>{{ $t('footer.address.location') }}</div>
            </li>
            <li class="footer-item">
              <font-awesome-icon class="icon-clock" :icon="['fas', 'clock']" />
              <div>{{ $t('footer.workingHours.details') }}</div>
            </li>
          </ul>
        </div>

        <ul class="text-gray-300 font-medium flex items-center md:flex-row flex-col">
          <font-awesome-icon class="icon-phone" :icon="['fas', 'phone']" />
          <div class="max_md:py-2">
            <li
              v-for="(number, index) in ['number1', 'number2', 'number3', 'number4']"
              :key="index"
              class="mb-4"
            >
              {{ $t(`footer.contactNumbers.${number}`) }}
            </li>
          </div>
        </ul>
      </div>

      <div class="pt-3 text-center hover:underline">
        <RouterLink class="text-gray-300" :to="`/${languageStore.locale}/home`">
          <span> &copy; </span>{{ date }}{{ $t('footer.copyright') }}
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: black;
  border-radius: 0.375rem;
  background: transparent;
  text-decoration: none;
  transition: all 0.3s ease;
}
.nav-link:hover {
  background: rgba(0, 0, 0, 0.1);
}
.footer-item {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  color: white;
  text-transform: uppercase;
}
.icon-location,
.icon-clock,
.icon-phone {
  padding-right: 0.5rem;
  font-size: 1.5rem;
  color: red;
}
</style>
