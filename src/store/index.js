import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    mutAdd(state){
      state.counter++
    },
    mutsub(state){
      state.counter--
    }
  },
  actions: {
      commitAdd({commit}){
        commit('mutAdd')
    },

    commitSub({commit}){
      commit('mutsub')
  },

  },
  modules: {
  }
})
