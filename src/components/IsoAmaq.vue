<template>
  <div class="container mx-auto">Iso filed</div>
  <div class="container mx-auto" @click="showdata">click</div>
  <div v-for="(item, index) in +$t('amaq_iso_45001'.length)" :key="index">
    <h3>
      {{ $t(`amaq_iso_45001.commitments[${index}].details[0]`) }}
    </h3>
  </div>
</template>
<script>
export default {
  methods: {
    showdata() {
      console.log(this.$t('amaq_iso_14001'.length))
    }
  }
}
</script>
