<template>
  <div class="container mx-auto">
    <div class="w-full flex max_md:flex-col justify-around py-32">
      <div
        class="md:w-4/12 h-min transform max_md:pb-16 md:-rotate-6 flex max_md:justify-center justify-between"
      >
        <img class="md:w-80 w-96 h-full drop-shadow-2xl" src="../assets/SD.jpg" />
      </div>
      <div class="md:w-6/12">
        <h3
          class="text-2xl md:w-3/5 leading-[3rem] font-extrabold pb-8 underline-offset-[12px] underline decoration-2 decoration-dashed"
        >
          {{ $t('commitment.title') }}
        </h3>
        <p class="text-xl">
          {{ $t('commitment.intro') }}
        </p>
        <p class="py-4 text-red-500 font-bold">
          {{ $t('commitment.highlight') }}
        </p>
        <ul class="list-disc list-inside">
          <h4 class="font-semibold text-lg">
            {{ $t('commitment.sections.environmentalSustainability.title') }}
          </h4>
          <li>{{ $t('commitment.sections.environmentalSustainability.point1') }}</li>
          <li>{{ $t('commitment.sections.environmentalSustainability.point2') }}</li>
        </ul>
        <ul class="list-disc list-inside">
          <h4 class="font-semibold text-lg">
            {{ $t('commitment.sections.economicDevelopment.title') }}
          </h4>
          <li>{{ $t('commitment.sections.economicDevelopment.point1') }}</li>
          <li>{{ $t('commitment.sections.economicDevelopment.point2') }}</li>
        </ul>
        <ul class="list-disc list-inside">
          <h4 class="font-semibold text-lg">
            {{ $t('commitment.sections.socialResponsibility.title') }}
          </h4>
          <li>{{ $t('commitment.sections.socialResponsibility.point1') }}</li>
          <li>{{ $t('commitment.sections.socialResponsibility.point2') }}</li>
        </ul>
        <ul class="list-disc list-inside">
          <h4 class="font-semibold text-lg">
            {{ $t('commitment.sections.integratedManagement.title') }}
          </h4>
          <li>{{ $t('commitment.sections.integratedManagement.point1') }}</li>
          <li>{{ $t('commitment.sections.integratedManagement.point2') }}</li>
        </ul>
        <ul class="list-disc list-inside">
          <h4 class="font-semibold text-lg">
            {{ $t('commitment.sections.legalCompliance.title') }}
          </h4>
          <li>{{ $t('commitment.sections.legalCompliance.point1') }}</li>
          <li>{{ $t('commitment.sections.legalCompliance.point2') }}</li>
        </ul>
        <ul class="list-disc list-inside">
          <h4 class="font-semibold text-lg">
            {{ $t('commitment.sections.communicationParticipation.title') }}
          </h4>
          <li>{{ $t('commitment.sections.communicationParticipation.point1') }}</li>
          <li>{{ $t('commitment.sections.communicationParticipation.point2') }}</li>
        </ul>
        <p class="pt-5">
          {{ $t('commitment.conclusion') }}
        </p>
      </div>
    </div>
  </div>
</template>
