import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue")
    },
    {
      path: '/menu/:id',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PostListView.vue")
    },
    {
      path: '/details',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/search/:query?',
      name:'search',
      component: () => import('../views/Search.vue'),
      props: true
     }
=======
      component: () => import("../views/detailsView.vue")
    }
>>>>>>> 1284e7d13afde469662025186c247c6dcd6399d0
  ]
})

export default router
