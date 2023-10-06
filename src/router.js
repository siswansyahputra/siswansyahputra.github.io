// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'

// Import komponen-komponen yang akan digunakan sebagai halaman
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
