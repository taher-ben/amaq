<template>
  <div class="relative h-72 backgroundimage bg-left">
    <div class="container h-full items-center flex mx-auto">
      <div class="text-xl flex rtl:flex-row">
        <span
          class="relative ltr:pr-2 ltr:before:absolute ltr:before:h-[90%] ltr:before:w-[1px] ltr:before:bg-black ltr:before:top-0 ltr:before:left-full rtl:after:absolute rtl:after:h-[90%] rtl:after:w-[1px] rtl:after:bg-black rtl:after:top-0 rtl:after:right-full rtl:pl-2"
        >
          <RouterLink :to="`/${languageStore.locale}/home`">{{ $t('home') }}</RouterLink>
        </span>
        <span class="mx-2">{{ title }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useLanguageStore } from '@/stores/languageStore'
const languageStore = useLanguageStore()
</script>
<script>
export default {
  props: ['title'],
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
.backgroundimage {
  background-image: url('../assets/pattrens/patren.jpg');
  background-size: cover;
  background-position: center;
}
</style>
