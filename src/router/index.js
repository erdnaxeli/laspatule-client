import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Recipe from "../views/Recipe";
import Recipes from "../views/Recipes";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.state.user.accessToken !== null) {
        next({ name: "Recipes" });
      } else {
        next();
      }
    }
  },
  {
    path: "/recettes",
    name: "Recipes",
    component: Recipes
  },
  {
    path: "/recette-*-:id(\\d+)",
    name: "Recipe",
    component: Recipe,
    props: route => ({ recipeId: route.params.id })
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name != "Login" && store.state.user.accessToken === null) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
