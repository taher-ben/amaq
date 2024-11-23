<template>
  <IsoAmaq />
  <PageHead :title="'Contact Us'" />
  <div class="container mx-auto">
    <div class="py-8 flex max_md:flex-col">
      <div class="md:w-6/12 max_md:mb-8 mx-2">
        <h2 class="text-2xl text-red-500 py-4 font-extrabold">Contact Us</h2>
        <p class="lg:w-[36rem]">
          At Amaq Al-Dauleya Oil Services Company, we are always striving to provide the best
          services to our clients and partners. We are happy to hear from you for any inquiries or
          requests.
        </p>
        <div class="pt-4">
          <h2 class="text-xl font-extrabold pb-2">Address</h2>
          <p class="xs:w-80">Al-Andalus District, Tripoli, Libya</p>
        </div>
        <div class="pt-4">
          <h2 class="text-xl font-extrabold py-2">Phone</h2>
          <ul>
            <li class="mb-2">218-92-2129320</li>
            <li class="mb-2">218-91-2129320</li>
            <li class="mb-2">218-21-7103172</li>
            <li class="mb-2">218-21-7103170</li>
          </ul>
        </div>
        <div class="pt-4">
          <h2 class="text-xl font-extrabold py-2">Working Hours</h2>
          <p class="xs:w-80">
            We are available to serve you from Saturday to Thursday, from 8:00 AM to 4:00 PM.
          </p>
        </div>
        <div class="pt-4">
          <h2 class="text-xl font-extrabold py-2">Email</h2>
          <p>info@amaq.ly</p>
        </div>
      </div>
      <div class="p-6 rounded-lg max_md:mb-8 md:w-6/12 shadow-2xl">
        <p class="mx-2 text-red-500 text-lg font-bold">
          Please fill out the form below and we will get in touch with you as soon as possible:
        </p>
        <VeeForm :validation-schema="schema">
          <div class="grid grid-cols-2 p-6 w-full">
            <div class="mx-2 my-4">
              <label class="pb-6" for="FirstName">First Name</label
              ><VeeField
                type="text"
                name="firsname"
                class="block w-full rounded-md border-0 px-3 py-4 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              />
              <ErrorMessage class="text-red-500" name="firsname" />
            </div>
            <div class="mx-2 my-4">
              <label class="pb-4" for="LastName">Last Name</label
              ><VeeField
                type="text"
                name="lastname"
                class="block w-full rounded-md border-0 px-3 py-4 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              />
              <ErrorMessage class="text-red-500" name="lastname" />
            </div>
            <div class="mx-2 my-4 col-span-2">
              <label class="pb-4" for="Email">Email</label
              ><VeeField
                type="email"
                name="email"
                class="block w-full rounded-md border-0 px-3 py-4 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              />
              <ErrorMessage class="text-red-500" name="email" />
            </div>
            <div class="mx-2 my-4 col-span-2">
              <label class="mb-4" for="Message">Message</label
              ><VeeField
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
                Submit
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
      arr: [1, 2, 3],
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
