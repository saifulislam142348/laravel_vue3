import { createStore } from 'vuex'

const store = createStore({

  state: {
    fruits: ["banana", "apple", "jacfruits"]
  },
  mutations: {
    add_food(state, data) {
state.fruits.push(data)
    }
  },
  actions: {
    foods({ commit }, data) {
      commit("add_food", data)
    }
  }
})
export default store;