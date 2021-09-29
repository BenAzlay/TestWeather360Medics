import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather: null
  },
  getters: {
  },
  mutations: {
    setWeather: (state, payload) => {
      state.weather = payload
    }
  },
  actions: {
    saveWeather({ commit }, payload) {
      return new Promise((resolve) => {
        commit('setWeather', payload)
        resolve()
      })
    }
  },
  modules: {
  }
})
