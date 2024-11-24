<template>
  <IsoAmaq />
  <PageHead :title="$t('contact.pageTitle')" />
  <div class="container mx-auto">
    <div class="py-8 flex max_md:flex-col">
      <div class="md:w-6/12 max_md:mb-8 mx-2">
        <h2 class="text-2xl text-red-500 py-4 font-extrabold">{{ $t('contact.pageTitle') }}</h2>
        <p class="lg:w-[36rem]">{{ $t('contact.intro') }}</p>
        <div class="pt-4">
          <h2 class="text-xl font-extrabold pb-2">{{ $t('contact.address.title') }}</h2>
          <p class="xs:w-80">{{ $t('contact.address.location') }}</p>
        </div>
        <div class="pt-4">
          <h2 class="text-xl font-extrabold py-2">{{ $t('contact.phone.title') }}</h2>
          <ul>
            <li>{{ $t('contact.phone.number1') }}</li>
            <li>{{ $t('contact.phone.number2') }}</li>
            <li>{{ $t('contact.phone.number3') }}</li>
            <li>{{ $t('contact.phone.number4') }}</li>
          </ul>
        </div>
        <div class="pt-4">
          <h2 class="text-xl font-extrabold py-2">{{ $t('contact.workingHours.title') }}</h2>
          <p class="xs:w-80">{{ $t('contact.workingHours.hours') }}</p>
        </div>
        <div class="pt-4">
          <h2 class="text-xl font-extrabold py-2">{{ $t('contact.email.title') }}</h2>
          <p>{{ $t('contact.email.address') }}</p>
        </div>
      </div>
      <div class="p-6 rounded-lg max_md:mb-8 md:w-6/12 shadow-2xl">
        <p class="mx-2 text-red-500 text-lg font-bold">{{ $t('contact.form.intro') }}</p>
        <VeeForm :validation-schema="schema">
          <div class="grid grid-cols-2 p-6 w-full">
            <div class="mx-2 my-4">
              <label class="pb-6" for="FirstName">{{ $t('contact.form.firstName') }}</label>
              <VeeField
                type="text"
                name="firsname"
                class="block w-full rounded-md border-0 px-3 py-4 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              />
              <ErrorMessage class="text-red-500" name="firsname" />
            </div>
            <div class="mx-2 my-4">
              <label class="pb-4" for="LastName">{{ $t('contact.form.lastName') }}</label>
              <VeeField
                type="text"
                name="lastname"
                class="block w-full rounded-md border-0 px-3 py-4 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              />
              <ErrorMessage class="text-red-500" name="lastname" />
            </div>
            <div class="mx-2 my-4 col-span-2">
              <label class="pb-4" for="Email">{{ $t('contact.form.email') }}</label>
              <VeeField
                type="email"
                name="email"
                class="block w-full rounded-md border-0 px-3 py-4 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              />
              <ErrorMessage class="text-red-500" name="email" />
            </div>
            <div class="mx-2 my-4 col-span-2">
              <label class="mb-4" for="Message">{{ $t('contact.form.message') }}</label>
              <VeeField
                as="textarea"
                name="mesasage"
                cols="8"
                rows="4"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 px-3 py-4 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              ></VeeField>
              <ErrorMessage class="text-red-500" name="mesasage" />
            </div>
            <div class="mx-2">
              <button
                class="mt-2 bg-black px-16 md:px-8 py-2 text-white hover:text-white hover:bg-red-600"
                type="submit"
              >
                {{ $t('contact.form.submit') }}
              </button>
            </div>
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script>
import IsoAmaq from '@/components/IsoAmaq.vue'
export default {
  components: {
    IsoAmaq
  },
  data() {
    return {
      schema: {
        firsname: 'required|max_lenght:15',
        lastname: 'required|max_lenght:10',
        email: 'required|email',
        mesasage: 'required|max_lenght:200'
      }
    }
  }
}
</script>
