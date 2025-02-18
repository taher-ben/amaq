<template>
  <div class="">
    <div
      class="h-[93vh] relative bg-cover bg-center overflow-hidden bg-current bg-no-repeat before:absolute before:bg-opacity-55 before:top-0 before:left-0 before:bg-black before:z-10 before:w-full before:h-full"
    >
      <!-- <div class="absolute top-[93%] left-[50%] z-40 text-white"></div> -->
      <img class="w-full" :src="`../../image/services/${this.id}.jpg`" alt="Service Image" />
    </div>
    <div class="container mx-auto">
      <h2 class="text-2xl mt-4 font-bold text-red-500">{{ service?.name }}</h2>
      <p class="my-4 text-gray-700">{{ service?.description }}</p>
    </div>
    <div class="container mx-auto mb-3" v-for="(item, index) in service.steps" :key="index">
      {{ index.title }}
      <div class="text-red-500 mb-2 text-xl">
        {{ item.title }}
      </div>
      <div v-for="(index, item) in item.description" :key="item">
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id', 'name'],
  data() {
    return {
      service: null
    }
  },
  async created() {
    try {
      const response = await axios.get(
        `https://amaq-66c14-default-rtdb.firebaseio.com/en/services/${this.id}/.json`
      )
      this.service = response.data
      console.log(this.service)
    } catch (error) {
      console.error('خطأ أثناء جلب بيانات الخدمة:', error)
    }
  }
}
</script>
