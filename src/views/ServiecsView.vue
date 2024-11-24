<template>
  <div :class="{ rtl: locale === 'ar' }">
    <PageHead :title="locale === 'en' ? 'Our Services' : 'خدماتنا'" />
    <div class="container mx-auto">
      <div class="container mx-auto my-32 overflow-hidden">
        <h2 class="pb-16 text-2xl font-bold text-red-500">
          {{ $t('companyServices') }}
        </h2>
        <div v-if="data && data.length" class="w-full h-fit relative overflow-auto slider-ser">
          <div
            class="flex snap-x snap-mandatory scroll-x-9 scroll-smooth boxs md:w-[180rem] w-[140rem]"
          >
            <RouterLink
              v-for="(item, index) in data"
              :key="index"
              :to="{ name: 'ServiceDetails', params: { id: index } }"
              class="md:max-w-sm snap-center max-w-[300px] mx-2 bg-white border border-gray-200 rounded-lg shadow"
            >
              <img class="rounded-t-lg" :src="`../../image/services/${index}.jpg`" alt="" />
              <div class="md:p-5 p-2">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500">
                    {{ item.name }}
                  </h5>
                </div>
                <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
                  {{ item.description }}
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
        <div v-else class="text-center text-gray-500">
          <p v-if="data === null">Loading...</p>
          <p v-else>No services available.</p>
        </div>
        <div class="flex w-fit">
          <button
            @click="prevSlide"
            class="w-full croser flex rtl:flex-row-reverse justify-start rtl:justify-end px-4 my-2"
          >
            <div class="cursor-pointer p-5 bg-black mx-2">
              <font-awesome-icon class="text-gray-200 icon" :icon="['fas', 'chevron-left']" />
            </div>
          </button>
          <button @click="nextSlide">
            <div class="cursor-pointer p-5 bg-black">
              <font-awesome-icon class="text-gray-200" :icon="['fas', 'chevron-right']" />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: null,
      locale: this.$i18n.locale,
      urls: {
        en: 'https://amaq-66c14-default-rtdb.firebaseio.com/en/services/.json',
        ar: 'https://amaq-66c14-default-rtdb.firebaseio.com/ar/services/.json'
      }
    }
  },
  methods: {
    async fetchData() {
      try {
        const cachedData = localStorage.getItem(`services_${this.locale}`)
        if (cachedData) {
          this.data = JSON.parse(cachedData)
        } else {
          const response = await axios.get(this.urls[this.locale])
          this.data = response.data
          localStorage.setItem(`services_${this.locale}`, JSON.stringify(response.data))
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler(newLocale) {
        this.locale = newLocale
        this.fetchData()
      }
    }
  }
}
</script>

<style>
.slider-ser {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.slider-ser::-webkit-scrollbar {
  display: none;
}

.rtl {
  direction: rtl;
}
.rtl .text-left {
  text-align: right;
}
.rtl .flex-row-reverse {
  flex-direction: row-reverse;
}
</style>
