<template>
  <div class="home" dir="ltr">
    <div class="max-2xl:h-[100vh] xl:h-[110vh] md:h-[100vh] min:h-[1030px] max:h-[2000px] relative">
      <div>
        <div
          class="absolute top-0 h-full md:h-full w-full overflow-hidden bg-gradient-to-tr rtl:bg-gradient-to-tl from-black from-60% to-transparent opacity-75 z-10"
        ></div>
        <div class="absolute top-0 h-full md:h-full overflow-hidden w-full -z-10">
          <video autoplay loop muted class="h-full w-full absolute top-0 left-0 object-cover">
            <source src="../assets/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        class="md:absolute relative w-full h-full z-10 lg:px-16 px-4 py-4 md:top-[10%] top-0 lg:from-transparent bg-gradient-to-t from-black from-60% to-transparent mx-auto"
      >
        <div class="">
          <div class="mb-16">
            <h1
              class="text-white text-4xl lg:w-80 md:w-3/4 px-2 py-2 border-t-4 ltr:border-l-4 rtl:border-r-4 border-red-500"
            >
              {{ $t('video_title') }}
            </h1>
            <p class="text-white lg:w-2/6 md:w-3/4 my-8">
              {{ $t('video_dicr') }}
            </p>
            <RouterLink
              to="#/about"
              class="mt-2 bg-white px-16 md:px-8 py-2 text-red-600 hover:text-white hover:bg-red-600"
              >Our Services</RouterLink
            >
          </div>
          <div class="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 gap-4 xl:w-4/6 lg:w-5/6 w-full">
            <div class="my-6 flex md:flex-row flex-col items-center">
              <font-awesome-icon
                class="text-white font-extrabold text-2xl mb-4 px-4 py-4 border-red-500 border rounded-full md:mx-2"
                :icon="['fab', 'envira']"
              />
              <p class="text-white">
                {{ $t('video_disone') }}
              </p>
            </div>
            <div class="my-6 flex md:flex-row flex-col items-center">
              <font-awesome-icon
                class="text-white font-extrabold text-2xl mb-4 px-4 py-4 border-red-500 border rounded-full md:mx-2"
                :icon="['fas', 'envelope']"
              />
              <p class="text-white">
                {{ $t('video_distwo') }}
              </p>
            </div>
            <div class="my-6 flex md:flex-row flex-col items-center">
              <font-awesome-icon
                class="text-white font-extrabold text-2xl mb-4 px-4 py-4 border-red-500 border rounded-full md:mx-2"
                :icon="['fas', 'eye']"
              />
              <p class="text-white">
                {{ $t('video_distree') }}
              </p>
            </div>
            <div class="my-6 flex md:flex-row flex-col items-center">
              <font-awesome-icon
                class="text-white font-extrabold text-2xl mb-4 px-4 py-4 border-red-500 border rounded-full md:mx-2"
                :icon="['fas', 'bullseye']"
              />
              <p class="text-white">
                {{ $t('video_disfour') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-300 py-4 lg:block hidden">
      <div class="container mx-auto">
        <div
          class="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 md:divide-x md:divide-y-0 divide-y gap-4"
        >
          <div class="px-2 py-6">
            <RouterLink to="/">
              <h5 class="text-red-600">Read More</h5>
              <p class="text-sm text-gray-700">March,22,2024</p>
              <p>Establishment of the First Secure Landfill Cell in Libya</p>
            </RouterLink>
          </div>
          <div class="px-2 py-6">
            <RouterLink to="/">
              <h5 class="text-red-600">Read More</h5>
              <p class="text-sm text-gray-700">March,22,2024</p>
              <p>Establishment of the First Secure Landfill Cell in Libya</p>
            </RouterLink>
          </div>

          <RouterLink to="/">
            <div class="px-2 py-6">
              <h5 class="text-red-600">Read More</h5>
              <p class="text-sm text-gray-700">March,22,2024</p>
              <p>Establishment of the First Secure Landfill Cell in Libya</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="bg-black py-16">
      <div class="container flex sm:flex-row flex-col justify-start items-center mx-auto px-14">
        <h2 class="pt-8 text-2xl font-bold text-white ltr:hidden">
          أحدث <span class="text-red-500 font-extrabold">الأخبار</span>
        </h2>
        <h2 class="pt-8 text-2xl text-white rtl:hidden">
          Latest <span class="text-red-500 font-extrabold">News</span>
        </h2>
      </div>
      <div
        class="container pb-6 grid mx-auto justify-items-center md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1"
      >
        <div class="w-5/6 py-8">
          <div>
            <img loading="lazy" src="../../image/images/1.jpg" alt="Emission Monitoring" />
          </div>
          <div class="pt-4">
            <h3 class="text-red-500 font-bold">News</h3>
            <p class="text-white mb-10">
              Emission Monitoring in Collaboration with the Ministry of Environment and the
              Environmental Police
            </p>
            <RouterLink
              to="#/NewsAndTopic/6"
              class="mt-2 bg-white px-16 md:px-8 py-2 text-red-600 hover:text-white hover:bg-red-600"
              >Read More</RouterLink
            >
          </div>
        </div>
        <div class="w-5/6 py-8">
          <div>
            <img loading="lazy" src="../../image/images/2.jpg" alt="Strategic Partnership" />
          </div>
          <div class="pt-4">
            <h3 class="text-red-500 font-bold">News</h3>
            <p class="text-white mb-10">
              Strategic Partnership between Amaq Al-Dauleya and Mellitah Oil & Gas for Environmental
              Sustainability
            </p>
            <RouterLink
              to="#/NewsAndTopic/8"
              class="bg-white px-16 md:px-8 py-2 text-red-600 hover:text-white hover:bg-red-600 mt-16"
              >Read More</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <div class="container bg-hero-pattern bg-conver py-16 mx-auto bg-cover bg-left bg-repeat">
      <h2 class="text-3xl text-black mb-4">Accreditation and Compliance Documents</h2>
      <div class="flex max_md:flex-col items-center justify-between">
        <RouterLink to="/" class="md:w-[25rem] w-[18rem] p-4 py-4"
          ><img src="../assets/iso/45001.png" alt="ISO 45001"
        /></RouterLink>
        <RouterLink to="/" class="md:w-[25rem] w-[18rem] p-4"
          ><img src="../assets/iso/14001.png" alt="ISO 14001"
        /></RouterLink>
        <RouterLink to="/" class="md:w-[25rem] w-[18rem] p-4"
          ><img src="../assets/iso/9001.png" alt="ISO 9001"
        /></RouterLink>
      </div>
    </div>
  </div>
</template>
