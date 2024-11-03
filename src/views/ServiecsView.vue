<template>
  <div>
    <PageHead :title="'Our Services'" />
  </div>
  <div class="container mx-auto">
    <div class="container mx-auto my-32 overflow-hidden">
      <h2 class="pb-16 text-2xl font-bold text-red-500">company services</h2>
      <div class="w-full h-fit relative overflow-auto slider-ser">
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
</template>

<script>
import axios from 'axios'

export default {
  props: ['title'],
  data() {
    return {
      data: null
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          'https://amaq-66c14-default-rtdb.firebaseio.com/services/.json'
        )
        this.data = response.data
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.fetchData()
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
</style>
