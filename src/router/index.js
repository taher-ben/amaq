import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceDetails from '../components/ServiceCompany.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/service/:id', // المسار الديناميكي لتحديد الخدمة حسب ID
      name: 'ServiceDetails',
      component: ServiceDetails,
      props: true // تفعيل props لتمرير ID كـ prop إلى المكوّن
    },
    {
      path: '/service',
      name: 'service',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ServiecsView.vue')
    },
    {
      path: '/News',
      name: 'News',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewsAndTopic.vue')
    },
    {
      path: '/QHEPPolicy',
      name: 'QHEPPolicy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QHEPPolicy.vue')
    },
    {
      path: '/SustainableDevelopment',
      name: 'SustainableDevelopment',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SustainableDevelopment.vue')
    },
    {
      path: '/ContactUS',
      name: 'ContactUS',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
