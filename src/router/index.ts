import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // Scroll to top on route change
    return { top: 0, left: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/warpinator',
      name: 'warpinator',
      meta: { title: 'Warpinator' },
      component: () => import('../views/WarpinatorView.vue')
    }
  ]
})

router.afterEach((to, _) => {
  nextTick(() => {
    document.title = to.meta.title ? `${to.meta.title} • 2.5 Perceivers` : '2.5 Perceivers'
  })
})

export default router
