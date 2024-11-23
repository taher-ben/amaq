<template>
  <RouterLink
    :to="'link'"
    class="mt-2 bg-black px-16 md:px-8 py-2 text-white hover:text-white hover:bg-red-600 w-fit"
  >
    {{ text }}
  </RouterLink>
</template>
<script>
export default {
  props: ['text', 'link'],
  data() {
    return {}
  }
}
</script>
