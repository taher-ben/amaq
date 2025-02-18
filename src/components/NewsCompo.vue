<template>
  <div v-if="data" class="LandFill mx-auto container pt-2 pb-16">
    <div class="relative bg-center overflow-hidden mx-auto lg:h-[750px] lg:w-[1440px]">
      <img
        loading="lazy"
        class="w-full h-full object-cover"
        :src="`../../image/news/${id}/${currentImageIndex}.jpg`"
        onerror="this.src='../../image/news/placeholder.jpg'"
      />
      <div v-if="images.length > 1" class="absolute inset-0 flex justify-between items-center px-4">
        <button>
          <font-awesome-icon
            class="text-white py-3 px-4 rounded-3xl bg-black cursor-pointer"
            :icon="['fas', 'angle-left']"
            @click="prevImage"
          />
        </button>
        <button>
          <font-awesome-icon
            class="text-white py-3 px-4 rounded-3xl bg-black cursor-pointer"
            :icon="['fas', 'angle-right']"
            @click="nextImage"
          />
        </button>
        <!-- Uncomment the line below if right navigation is needed -->
        <!-- <font-awesome-icon
          class="text-white py-3 px-4 rounded-3xl bg-black cursor-pointer"
          :icon="['fas', 'angle-right']"
          @click="nextImage"
        /> -->
      </div>
    </div>
    <div class="pt-2">
      <h3 class="text-xl font-bold py-2">{{ data[id].title }}</h3>
      <div>
        <p>
          {{ data[id].content[0].details }}
        </p>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-8">
    <!-- Placeholder or Loading Message -->
    <p class="animate-spin">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
      ></span>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data() {
    return {
      currentImageIndex: 0,
      images: [0, 1],
      data: null
    }
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length
    },
    async fetchData() {
      const locale = this.$i18n.locale
      const mianUrl = 'https://amaq-66c14-default-rtdb.firebaseio.com/'
      const url = locale === 'ar' ? 'ar/news.json' : 'en/news.json'
      try {
        const response = await axios.get(`${mianUrl}${url}`)
        this.data = response.data
        console.log(this.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
