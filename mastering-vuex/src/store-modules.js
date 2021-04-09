import Vue from 'vue'
import Vuex from 'vuex'
import  {moduleStore}  from '../src/module-store'
import  {userProfiles}  from '../src/modules/userProfiles'
import  {userPosrts}  from './modules/userPosts'
import { mutation } from '../mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moduleStore,
    userProfiles,
    userPosrts
  },
  state: {},
  // user getters method here ......
  getters: {
    doneTodos: state => {
      return state.moduleStore.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state) => {
      return state.moduleStore.todos.length
    },
    doneTodosCountGetters: (state, getters) => {
      return getters.doneTodos.length
    },
    doneTodoById: (state) => (id) => {
      return state.moduleStore.todos.find(todo => todo.id == id)
    },
    getState(state) {
      alert('get state in getters method ' + state.count)
    }
  },
  // mutations increment state count here.....
  mutations: {
    actionIncrementDecrement (state) {
      state.moduleStore.count++
    },
    DECREMENT (state) {
      state.moduleStore.count--
    },
    // incrementBy (state, n){
    //   state.count += n
    // },
    // decrementBy (state, n){
    //   state.count -= n
    // }
    incrementBy (state, payload){
      state.moduleStore.count += payload.amount
    },
    decrementBy (state, payload){
      state.moduleStore.count -= payload.amount
    },
    getalertfirst () {
        alert('getalertfirst');
    },
    getalertsecond () {
      alert('getalertsecond')
    }
  },
  actions: {
    incrementAsync (context, payload) {
      setTimeout(() => {
        context.commit('incrementBy', payload);  
      }, 400);
    },

    decrementByAsync ({commit}, payload) {
      setTimeout(() => {
        commit('decrementBy', payload)  
      }, 500);
    },

    async actionIncrementDecrement (context) {
      context.getters.getState;
      alert('get state ' + context.state.count);
      context.commit('getalertfirst', await alert('getalertsecond'))
    }
  }
})
