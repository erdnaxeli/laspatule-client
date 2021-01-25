import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recipeDetail: {
      title: '',
      ingredients: [
        {
          id: 0,
          name: '',
          quantity: ''
        },
      ],
      sections: [
        {
          title: '',
          steps: [''],
        }
      ],
    },
    recipesSummaries: [
      {
        title: ''
      },
    ],
    recipeCreation: {
      title: '',
      ingredients: [
        {
          id: null,
          name: '',
          quantity: ''
        },
      ],
      sections: [
        {
          title: '',
          steps: [''],
        }
      ],
    },
    user: {
      id: null,
      name: '',
    },
  },
  mutations: {
    addIngredient(state, ingredient) {
      state.recipeCreation.ingredients.push(ingredient)
    },
    removeIngredient(state, index) {
      state.recipeCreation.ingredients.splice(index, 1)
    },
    replaceIngredient(state, { index, ingredient }) {
      state.recipeCreation.ingredients.splice(index, 1, ingredient)
    },
    setUser(state, id) {
      state.user.id = id
    }
  },
  actions: {
    login({ commit }) {
      commit('setUser', 1)
    },
    logout({ commit }) {
      commit('setUser', null)
    }
  }
})

export default store
