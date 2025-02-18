<template>
  <div class="NewsAndTopic">
    <PageHead :title="'NewsAndTopic'" />
    <div class="bg-gray-200">
      <div class="container mx-auto">
        <div class="grid gap-4 max-md:relative w-full max-md:min-w-96 py-16 px-3">
          <div
            v-for="(item, index) in data.reverse()"
            :key="index"
            class="md:flex md:flex-row justify-center md:bg-transparent bg-white max-md:top-0 max-md:left-0 max-md:w-96 max-sm:w-80"
          >
            <div class="max-md:w-full md:w-96 w-auto sm:mx-0 mx-auto">
              <img :src="`../../image/news/${data.length - 1 - index}/0.jpg`" alt="" />
            </div>
            <div class="flex flex-col justify-evenly p-4 md:basis-2/4">
              <div class="text-red-500 font-bold uppercase">{{ item.id }}</div>
              <div>
                {{ item.title }}
              </div>
              <RouterLink
                :to="{ name: 'NewsCompo', params: { id: `${data.length - 1 - index}` } }"
                class="mt-2 bg-black px-16 md:px-8 py-2 text-white hover:text-white hover:bg-red-600 w-fit my-2 duration-150"
              >
                {{ $t('readmore') }}
              </RouterLink>
            </div>
          </div>
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
      data: []
    }
  },

  methods: {
    async fetchData() {
      const locale = this.$i18n.locale
      const mianUrl = 'https://amaq-66c14-default-rtdb.firebaseio.com/'
      const url = locale === 'ar' ? 'ar/news.json' : 'en/news.json'
      try {
        const response = await axios.get(`${mianUrl}${url}`)
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
