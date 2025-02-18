<template>
  <div class="container mx-auto">
    <div>
      <div class="w-full flex max_md:flex-col justify-around py-32">
        <div
          class="md:w-4/12 h-min transform max_md:pb-16 md:-rotate-6 flex max_md:justify-center justify-between"
        >
          <img class="md:w-80 w-96 h-full drop-shadow-2xl" :src="`../../image/iso/${id}.png`" />
        </div>
        <div class="md:w-6/12">
          <h3
            class="text-2xl md:w-3/5 leading-[3rem] font-extrabold pb-8 underline-offset-[12px] underline decoration-2 decoration-dashed"
          >
            {{ $t(`iso.${id}.title`) }}
          </h3>
          <p class="text-xl">
            {{ $t(`iso.${id}.overview`) }}
          </p>
          <p class="py-4 text-red-500 font-bold">
            {{ $t(`iso.${id}.commitment`) }}
          </p>
          <ul class="list-disc list-inside">
            <h4 class="font-semibold text-lg">
              {{ $t(`iso.${id}.requirements.environmental_policies.title`) }}
            </h4>
            <li>
              {{ $t(`iso.${id}.requirements.environmental_policies.description`) }}
            </li>
            <li>
              {{ $t(`iso.${id}.requirements.environmental_policies.compliance`) }}
            </li>
          </ul>
          <ul class="list-disc list-inside">
            <h4 class="font-semibold text-lg">
              {{ $t(`iso.${id}.requirements.environmental_planning.title`) }}
            </h4>
            <li>
              {{ $t(`iso.${id}.requirements.environmental_planning.description`) }}
            </li>
            <li>
              {{ $t(`iso.${id}.requirements.environmental_planning.objectives`) }}
            </li>
          </ul>
          <ul class="list-disc list-inside">
            <h4 class="font-semibold text-lg">
              {{ $t(`iso.${id}.requirements.implementation_and_operation.title`) }}
            </h4>
            <li>
              {{ $t(`iso.${id}.requirements.implementation_and_operation.description`) }}
            </li>
            <li>
              {{ $t(`iso.${id}.requirements.implementation_and_operation.training`) }}
            </li>
          </ul>
          <ul class="list-disc list-inside">
            <h4 class="font-semibold text-lg">
              {{ $t(`iso.${id}.requirements.review_and_continuous_improvement.title`) }}
            </h4>
            <li>
              {{ $t(`iso.${id}.requirements.review_and_continuous_improvement.description`) }}
            </li>
            <li>
              {{ $t(`iso.${id}.requirements.review_and_continuous_improvement.actions`) }}
            </li>
          </ul>
          <ul class="list-disc list-inside">
            <h4 class="font-semibold text-lg">
              {{ $t(`iso.${id}.requirements.legal_compliance.title`) }}
            </h4>
            <li>
              {{ $t(`iso.${id}.requirements.legal_compliance.description`) }}
            </li>
            <li>
              {{ $t(`iso.${id}.requirements.legal_compliance.updates`) }}
            </li>
          </ul>
          <ul class="list-disc list-inside">
            <h4 class="font-semibold text-lg">
              {{ $t(`iso.${id}.requirements.communication_and_engagement.title`) }}
            </h4>
            <li>
              {{ $t(`iso.${id}.requirements.communication_and_engagement.description`) }}
            </li>
            <li>
              {{ $t(`iso.${id}.requirements.communication_and_engagement.engagement`) }}
            </li>
          </ul>
          <p class="pt-5">
            {{ $t(`iso.${id}.conclusion`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {}
  },
  methods: {}
}
</script>
