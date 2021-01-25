import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login"
import Recipes from "../views/Recipes"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token') !== null) {
        next({name: 'Recipes'})
      }
      else {
        next()
      }
    }
  },
  {
    path: '/recettes',
    name: 'Recipes',
    component: Recipes,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
