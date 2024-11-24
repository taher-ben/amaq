<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <header>
    <nav
      class="bg-gray-200 border-gray-200 py-2.5 relative w-full"
      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    >
      <div class="flex lg:flex-wrap justify-between items-center container mx-auto">
        <RouterLink to="/" class="flex items-center">
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
              <RouterLink
                to="/"
                class="block py-2 px-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
              >
                {{ $t('home') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/service"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
              >
                {{ $t('Services') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/QHEPPolicy"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
              >
                {{ $t('ourpooicies') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/News"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
              >
                {{ $t('News_and_Activities') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/SustainableDevelopment"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
              >
                {{ $t('sustainable_development') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/ContactUS"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
              >
                {{ $t('contact us') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/"
                @click="toggleLanguage"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
              >
                <!-- <select v-model="$i18n.locale">
                  <option
                    v-for="locale in $i18n.availableLocales"
                    :key="`locale-${locale}`"
                    :value="locale"
                  >
                    {{ locale }}
                  </option>
                </select> -->
                <font-awesome-icon :icon="['fas', 'globe']" />
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <RouterView />
  </div>
  <footer class="bg-black pt-6 pb-4" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="container mx-auto divide-y">
      <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 items-center">
        <!-- Logo Section -->
        <div class="lg:col-span-2">
          <img class="w-128" src="../image/whitelogo.png" alt="Logo" />
        </div>

        <!-- Important Links Section -->
        <div class="max_md:flex max_md:flex-col max_md:items-center max_md:py-2 mx-auto">
          <ul>
            <li>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                {{ $t('footer.importantLinks') }}
              </h2>
            </li>
            <li class="mb-4">
              <RouterLink to="/" class="router-link-exact-active hover:underline text-white">
                {{ $t('footer.home') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/News" class="router-link-exact-active hover:underline text-white">
                {{ $t('footer.newsAndActivities') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Address and Working Hours Section -->
        <div>
          <ul>
            <li
              class="mb-6 text-sm flex md:flex-row items-center flex-col text-white uppercase dark:text-white"
            >
              <font-awesome-icon
                class="svg-inline--fa fa-location-dot px-2 text-2xl text-red-500"
                :icon="['fas', 'location-dot']"
              />
              <div>{{ $t('footer.address.location') }}</div>
            </li>
            <li
              class="mb-6 text-sm flex md:flex-row items-center flex-col text-white uppercase dark:text-white"
            >
              <font-awesome-icon
                class="svg-inline--fa fa-clock px-2 text-2xl text-red-500"
                :icon="['fas', 'clock']"
              />
              <div>{{ $t('footer.workingHours.details') }}</div>
            </li>
          </ul>
        </div>

        <!-- Contact Numbers Section -->
        <ul class="text-gray-300 font-medium flex items-center md:flex-row flex-col">
          <font-awesome-icon
            class="svg-inline--fa fa-phone px-2 text-2xl text-red-500"
            :icon="['fas', 'phone']"
          />
          <div class="max_md:py-2">
            <li class="mb-4">{{ $t('footer.contactNumbers.number1') }}</li>
            <li class="mb-4">{{ $t('footer.contactNumbers.number2') }}</li>
            <li class="mb-4">{{ $t('footer.contactNumbers.number3') }}</li>
            <li class="mb-4">{{ $t('footer.contactNumbers.number4') }}</li>
          </div>
        </ul>
      </div>

      <!-- Copyright Section -->
      <div class="pt-3 text-center hover:underline">
        <RouterLink class="text-gray-300" to="/">
          {{ $t('footer.copyright') }}
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentLanguage: this.$i18n.locale
    }
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en'
      this.$i18n.locale = this.currentLanguage
    }
  }
}
</script>
