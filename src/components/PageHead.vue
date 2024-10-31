<template>
  <div class="relative h-72 bg-pattern-head bg-left">
    <div class="container h-full items-center flex mx-auto">
      <div class="text-xl flex rtl:flex-row">
        <span
          class="relative ltr:pr-2 ltr:before:absolute ltr:before:h-[90%] ltr:before:w-[1px] ltr:before:bg-black ltr:before:top-0 ltr:before:left-full rtl:after:absolute rtl:after:h-[90%] rtl:after:w-[1px] rtl:after:bg-black rtl:after:top-0 rtl:after:right-full rtl:pl-2"
        >
          <RouterLink to="/">Home</RouterLink>
        </span>
        <span class="mx-2">{{ title }}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <!-- عرض البيانات بعد جلبها -->
    <div v-if="data">
      <h3 class="text-lg font-bold mb-2">البيانات:</h3>
      <div v-for="(value, key) in data" :key="key" class="mb-4">
        <h4 class="text-md font-semibold">{{ key }}</h4>
        <p>{{ value }}</p>
      </div>
    </div>
  </div>

  <div @click="fetchData" class="cursor-pointer mt-5 text-blue-500">اضغط هنا لجلب البيانات</div>
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
          'https://amaq-66c14-default-rtdb.firebaseio.com/en/en/amaq_iso_14001/.json'
        )
        this.data = response.data
        console.log('تم جلب البيانات:', response.data)
      } catch (error) {
        console.error('خطأ أثناء جلب البيانات:', error)
      }
    }
  }
}
</script>
