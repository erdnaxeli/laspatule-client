import Vue from "vue";
import Vuex from "vuex";

import userAPI from "../api/user";
import recipesAPI from "../api/recipes";
import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recipeDetail: {
      title: "",
      ingredients: [
        {
          id: 0,
          name: "",
          quantity: ""
        }
      ],
      sections: [
        {
          title: "",
          steps: [""]
        }
      ]
    },
    recipeDetailLoading: false,
    recipesSummaries: [
      {
        title: ""
      }
    ],
    recipeCreation: {
      title: "",
      ingredients: [
        {
          id: null,
          name: "",
          quantity: ""
        }
      ],
      sections: [
        {
          title: "",
          steps: [""]
        }
      ]
    },
    recipes: [],
    recipesLoading: false,
    user: {
      id: null,
      name: "",
      accessToken: localStorage.getItem("accessToken")
    },
    auth: {
      loading: false,
      error: false
    }
  },
  mutations: {
    addIngredient(state, ingredient) {
      state.recipeCreation.ingredients.push(ingredient);
    },
    removeIngredient(state, index) {
      state.recipeCreation.ingredients.splice(index, 1);
    },
    replaceIngredient(state, { index, ingredient }) {
      state.recipeCreation.ingredients.splice(index, 1, ingredient);
    },
    saveRecipeDetail(state, recipe) {
      state.recipeDetail = recipe;
    },
    saveRecipes(state, recipes) {
      state.recipes = recipes;
    },
    setUser(state, user) {
      state.user.id = user.id;
      state.user.name = user.name;
    },
    setAuthError(state) {
      state.auth.error = true;
    },
    setUserAccessToken(state, accessToken) {
      state.user.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
    },
    toggleAuthLoading(state) {
      state.auth.loading = !state.auth.loading;
    },
    toggleRecipeDetailLoading(state) {
      state.recipeDetailLoading = !state.recipeDetailLoading;
    },
    toggleRecipesLoading(state) {
      state.recipesLoading = !state.recipesLoading;
    }
  },
  actions: {
    async login({ commit }, user) {
      commit("toggleAuthLoading");
      let accessToken = await userAPI.login(user.email, user.password);
      commit("toggleAuthLoading");
      if (accessToken === null) {
        commit("setAuthError");
      } else {
        commit("setUserAccessToken", accessToken);
        user = await userAPI.getUser(accessToken);
        commit("setUser", user);
        router.push({ name: "Recipes" });
      }
    },
    logout({ commit }) {
      commit("setUser", null);
    },
    async getRecipeDetail({ commit }, recipeId) {
      commit("toggleRecipeDetailLoading");
      let recipe = await recipesAPI.get(recipeId);
      commit("toggleRecipeDetailLoading");
      commit("saveRecipeDetail", recipe);
    },
    async getRecipes({ commit }) {
      commit("toggleRecipesLoading");
      let page = await recipesAPI.get_all();
      commit("toggleRecipesLoading");
      commit("saveRecipes", page.content);
    }
  }
});

export default store;
