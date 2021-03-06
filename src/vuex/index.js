import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
// 首页声明一个状态state
const state = {
  count: 0
}
// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store
