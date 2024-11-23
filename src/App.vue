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
          <img src="./assets/logo.png" class="mr-3 w-64" />
        </RouterLink>
        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-gray-600 focus:outline-none">
            <font-awesome-icon
              class="transition ease-in-out delay-300 text-xl"
              v-if="isOpen === true"
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
                >ي</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/service"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
                >Services</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/QHEPPolicy"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
                >Our Policies</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/News"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
                >News and Activities</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/SustainableDevelopment"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
                >sustainable development</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/ContactUS"
                class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 ms-2"
                aria-current="page"
                >Contact Us</RouterLink
              >
            </li>
            <li>
              <select v-model="$i18n.locale">
                <option
                  v-for="locale in $i18n.availableLocales"
                  :key="`locale-${locale}`"
                  :value="locale"
                >
                  {{ locale }}
                </option>
              </select>
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
        <div class="lg:col-span-2">
          <img class="w-128" src="../image/whitelogo.png" alt="" />
        </div>
        <div class="max_md:flex max_md:flex-col max_md:items-center max_md:py-2 mx-auto">
          <ul>
            <li>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Important Links
              </h2>
            </li>
            <li class="mb-4">
              <RouterLink to="/" class="router-link-exact-active hover:underline text-white"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/" class="router-link-exact-active hover:underline text-white">
                News And Activities
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li
              class="mb-6 text-sm flex md:flex-row items-center flex-col text-white uppercase dark:text-white"
            >
              <font-awesome-icon
                class="svg-inline--fa fa-location-dot px-2 text-2xl text-red-500"
                :icon="['fas', 'location-dot']"
              />
              <div>Andalusia District, Tripoli, Libya</div>
            </li>
            <li
              class="mb-6 text-sm flex md:flex-row items-center flex-col text-white uppercase dark:text-white"
            >
              <font-awesome-icon
                class="svg-inline--fa fa-location-dot px-2 text-2xl text-red-500"
                :icon="['fas', 'clock']"
              />
              <div>
                We are available to serve you from Saturday to Thursday, from 8:00 AM to 4:00 PM.
              </div>
            </li>
          </ul>
        </div>
        <ul class="text-gray-300 font-medium flex items-center md:flex-row flex-col">
          <font-awesome-icon
            class="svg-inline--fa fa-location-dot px-2 text-2xl text-red-500"
            :icon="['fas', 'phone']"
          />
          <div class="max_md:py-2">
            <li class="mb-4">218-92-2129320</li>
            <li class="mb-4">218-91-2129320</li>
            <li class="mb-4">218-21-7103172</li>
            <li class="mb-4">218-21-7103170</li>
          </div>
        </ul>
      </div>
      <div class="pt-3 text-center hover:underline">
        <RouterLink class="text-gray-300" to="/"
          >© 2024 Amaq Al-Dauleya Oil Services Company</RouterLink
        >
      </div>
    </div>
  </footer>
</template>
