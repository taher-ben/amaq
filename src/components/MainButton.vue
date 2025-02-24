<template>
  <RouterLink
    :to="`/${languageStore.locale}/link`"
    class="mt-2 bg-black px-16 md:px-8 py-2 text-white hover:text-white hover:bg-red-600 w-fit"
  >
    {{ text }}
  </RouterLink>
</template>
<script setup>
import { useLanguageStore } from '@/stores/languageStore'
const languageStore = useLanguageStore()
</script>
<script>
export default {
  props: ['text', 'link'],
  data() {
    return {}
  }
}
</script>
