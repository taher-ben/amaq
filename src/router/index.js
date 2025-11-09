import { createRouter, createWebHashHistory } from 'vue-router'
import { useLanguageStore } from '../stores/languageStore' // استيراد Pinia Store
import HomeView from '../views/HomeView.vue'
import ServiceDetails from '../components/ServiceCompany.vue'
import NewsCompo from '../components/NewsCompo.vue'
import ISO from '../components/IsoAmaq.vue'

const routes = [
  {
    path: '/:locale/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:locale/Amaq-ISO/:id',
    name: 'ISO',
    component: ISO,
    props: true
  },
  {
    path: '/:locale/service/:id',
    name: 'ServiceDetails',
    component: ServiceDetails,
    props: true
  },
  {
    path: '/:locale/NewsCompo/:id',
    name: 'NewsCompo',
    component: NewsCompo,
    props: true
  },
  {
    path: '/:locale/service',
    name: 'service',
    component: () => import('../views/ServiecsView.vue')
  },
  {
    path: '/:locale/news',
    name: 'News',
    component: () => import('../views/NewsAndTopic.vue')
  },
  {
    path: '/:locale/QHEPPolicy',
    name: 'QHEPPolicy',
    component: () => import('../views/QHEPPolicy.vue')
  },
  {
    path: '/:locale/SustainableDevelopment',
    name: 'SustainableDevelopment',
    component: () => import('../views/SustainableDevelopment.vue')
  },
  {
    path: '/:locale/ContactUS',
    name: 'ContactUS',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/',
    redirect: '/en/home'
  },
  {
    path: '/:pathMatch(.*)*',
    beforeEnter: (to, from, next) => {
      const languageStore = useLanguageStore()
      const locale = languageStore.locale || 'en'
      next(`/${locale}/home`)
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  const languageStore = useLanguageStore()
  const locale = to.params.locale || languageStore.locale || 'en'

  if (!['en', 'ar'].includes(locale)) {
    return next(`/${languageStore.locale}/home`)
  }

  languageStore.setLocale(locale)
  next()
})

export default router
