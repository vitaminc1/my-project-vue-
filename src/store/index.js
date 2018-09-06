import Vue from 'vue'
import Vuex from 'vuex'

import {
  getUser,
} from '../fetch/api'

Vue.use(Vuex)

const state = {
  userInfo: {},
}

const getters = {
  userInfo (state) {
    return state.userInfo
  }
}

const mutations = {
  SET_USERINFO (state, userInfo) {
    Vue.set(state, 'userInfo', userInfo)
  }
}

const actions = {
  async getUser ({ commit }, branchId = null) {
    var userInfo = await getUser()
    commit('SET_USERINFO', userInfo)
  }
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
