<template>
  <div class="container mx-auto p-6 bg-gray-100" dir="ltr">
    <header class="bg-gray-800 text-white py-4 mb-6">
      <h1 class="text-3xl font-bold text-center">{{ $t('policy.title') }}</h1>
    </header>
    <section class="bg-white p-6 rounded shadow-md">
      <h2 class="text-2xl font-semibold mb-4">{{ $t('policy.commitmentTitle') }}</h2>
      <p class="mb-4">
        {{ $t('policy.commitmentText') }}
      </p>
      <ul class="list-none space-y-4">
        <li class="bg-gray-100 p-4 ltr:border-l-4 rtl:border-r-4 border-red-600">
          <strong>{{ $t('policy.principles.quality.title') }}:</strong>
          {{ $t('policy.principles.quality.description') }}
        </li>
        <li class="bg-gray-100 p-4 ltr:border-l-4 rtl:border-r-4 border-red-600">
          <strong>{{ $t('policy.principles.healthSafety.title') }}:</strong>
          {{ $t('policy.principles.healthSafety.description') }}
        </li>
        <li class="bg-gray-100 p-4 ltr:border-l-4 rtl:border-r-4 border-red-600">
          <strong>{{ $t('policy.principles.environmentalProtection.title') }}:</strong>
          {{ $t('policy.principles.environmentalProtection.description') }}
        </li>
        <li class="bg-gray-100 p-4 ltr:border-l-4 rtl:border-r-4 border-red-600">
          <strong>{{ $t('policy.principles.compliance.title') }}:</strong>
          {{ $t('policy.principles.compliance.description') }}
        </li>
        <li class="bg-gray-100 p-4 ltr:border-l-4 rtl:border-r-4 border-red-600">
          <strong>{{ $t('policy.principles.riskManagement.title') }}:</strong>
          {{ $t('policy.principles.riskManagement.description') }}
        </li>
        <li class="bg-gray-100 p-4 ltr:border-l-4 rtl:border-r-4 border-red-600">
          <strong>{{ $t('policy.principles.employeeEngagement.title') }}:</strong>
          {{ $t('policy.principles.employeeEngagement.description') }}
        </li>
        <li class="bg-gray-100 p-4 ltr:border-l-4 rtl:border-r-4 border-red-600">
          <strong>{{ $t('policy.principles.stakeholderCollaboration.title') }}:</strong>
          {{ $t('policy.principles.stakeholderCollaboration.description') }}
        </li>
      </ul>
    </section>
  </div>
</template>
