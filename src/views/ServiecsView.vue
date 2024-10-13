<template>
  <div>
    <PageHead :title="'Our Services'" />
  </div>
  <div class="container mx-auto">
    <div class="container mx-auto my-32 overflow-hidden">
      <h2 class="pb-16 text-2xl font-bold text-red-500">company services</h2>
      <div class="w-full h-fit relative overflow-auto slider-ser">
        <div
          ref="slider"
          class="flex snap-x snap-mandatory scroll-x-9 scroll-smooth boxs md:w-[180rem] w-[140rem]"
        >
          <RouterLink
            to="#/about/1"
            class="md:max-w-sm snap-center max-w-[300px] mx-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            <img class="rounded-t-lg" src="../assets/services/1.jpg" alt="" />
            <div class="md:p-5 p-2">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 dark:text-white">
                  Biological Treatment (Biodegradation)
                </h5>
              </div>
              <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
                This method relies on the use of microorganisms to break down oil pollutants and
                convert them into harmless substances like carbon dioxide and water. It is
                considered environmentally friendly and effective for treating oil-contaminated soil
                and water.
              </p>
            </div>
          </RouterLink>
          <RouterLink
            to="/service"
            class="md:max-w-sm snap-center max-w-[300px] mx-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            <img class="rounded-t-lg" src="../assets/services/2.jpg" alt="" />
            <div class="md:p-5 p-2">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 dark:text-white">
                  Thermal Treatment
                </h5>
              </div>
              <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
                Thermal treatment includes techniques such as incineration, which uses high
                temperatures to break down organic pollutants into harmless gases. Additionally, a
                Thermal Desorption Unit (TDU) can be used to treat oil sludge and contaminated
                solids. The TDU works by heating the contaminated materials in an oxygen-free
                environment, leading to the decomposition of pollutants without complete combustion.
              </p>
            </div>
          </RouterLink>
          <RouterLink
            to="/"
            class="md:max-w-sm snap-center max-w-[300px] mx-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            <img class="rounded-t-lg" src="../assets/services/3.jpg" alt="" />
            <div class="md:p-5 p-2">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 dark:text-white">
                  Physical and Chemical Separation
                </h5>
              </div>
              <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
                These methods involve using techniques such as sedimentation, filtration, and
                flotation to separate oil pollutants from water or other materials. Among the
                techniques used in physical and chemical treatment, the Advanced Oxidation
                Processing (AOP) unit stands out as an effective method for treating
                oil-contaminated water. AOP uses ozone as a chemical catalyst to break down oil
                pollutants into harmless compounds. Ozone, as a strong oxidizing agent, helps in
                breaking down organic molecules and improving water quality.
              </p>
            </div>
          </RouterLink>
          <RouterLink
            to="#/about/4"
            class="md:max-w-sm snap-center max-w-[300px] mx-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            <img class="rounded-t-lg" src="../assets/services/4.jpg" alt="" />
            <div class="md:p-5 p-2">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 dark:text-white">
                  Recycling
                </h5>
              </div>
              <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
                Some oil wastes, such as used oils, can be recycled through purification and
                cleaning techniques to make them usable again. This method helps reduce the need for
                new oil extraction and minimizes waste.
              </p>
            </div>
          </RouterLink>
          <RouterLink
            to="#/about/5"
            class="md:max-w-sm snap-center max-w-[300px] mx-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            <img class="rounded-t-lg" src="../assets/services/5.jpg" alt="" />
            <div class="md:p-5 p-2">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 dark:text-white">
                  Final Disposal
                </h5>
              </div>
              <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
                Aamaaq International owns a sanitary landfill, the first of its kind in Libya. The
                opening ceremony was attended by the Deputy Prime Minister, Acting Minister of
                Health, Minister of Environment, Director General of the General Administration of
                Environmental Sanitation at the Ministry of Local Government, and representatives
                from the Ministry of Higher and Technical Education, along with several public
                figures, municipal mayors, and directors of environmental sanitation offices in
                various municipalities.
              </p>
            </div>
          </RouterLink>
          <RouterLink
            to="#/about/6"
            class="md:max-w-sm snap-center max-w-[300px] mx-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            <img class="rounded-t-lg" src="../assets/services/6.jpg" alt="" />
            <div class="md:p-5 p-2">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 dark:text-white">
                  Electrochemical Treatment
                </h5>
              </div>
              <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
                This technique involves using electrical current to stimulate chemical reactions
                that help break down oil pollutants. This method is particularly used for treating
                contaminated water.
              </p>
            </div>
          </RouterLink>
          <RouterLink
            to="#/about/7"
            class="md:max-w-sm snap-center max-w-[300px] mx-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            <img class="rounded-t-lg" src="../assets/services/7.jpg" alt="" />
            <div class="md:p-5 p-2">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 dark:text-white">
                  Environmental Operations Monitoring
                </h5>
              </div>
              <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
                Aamaaq International, through specialized companies under long-term agreements, is
                engaged in continuous monitoring of emissions and full tracking of environmental
                pollutants at company sites using advanced SMART technologies. The company also has
                fixed and mobile laboratories to ensure the quality of environmental work and ensure
                environmental protection.
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="flex w-fit">
        <button
          @click="prevSlide"
          class="w-full croser flex rtl:flex-row-reverse justify-start rtl:justify-end px-4 my-2"
        >
          <div class="cursor-pointer p-5 bg-black mx-2">
            <font-awesome-icon class="text-gray-200 icon" :icon="['fas', 'chevron-left']" />
          </div>
        </button>
        <button @click="nextSlide">
          <div class="cursor-pointer p-5 bg-black">
            <font-awesome-icon class="text-gray-200" :icon="['fas', 'chevron-right']" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      right: 0,
      lefte: 0
    }
  },
  methods: {
    // nextSlide() {
    //   const slides = this.$refs.slider.children
    //   this.currentIndex = (this.currentIndex + 1) % slides.length
    //   this.updateSlider()
    // },
    // prevSlide() {
    //   const slides = this.$refs.slider.children
    //   this.currentIndex = (this.currentIndex - 1 + slides.length) % slides.length
    //   this.updateSlider()
    // },
    // updateSlider() {
    //   const slides = this.$refs.slider.children
    //   const offset = -this.currentIndex * (100 / slides.length)
    //   this.$refs.slider.style.transform = `translateX(${offset}%)`
    // }
  }
}
</script>

<style>
.slider-ser {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.slider-ser::-webkit-scrollbar {
  display: none;
}
</style>
