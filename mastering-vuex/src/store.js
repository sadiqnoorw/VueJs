import Vue from 'vue'
import Vuex from 'vuex'
import { mutation } from '../mutation-types'

//import store modules here....
import  {moduleStore}  from '../src/module-store'
import  {userProfiles}  from '../src/modules/userProfiles'
import  {userPosts}  from './modules/userPosts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moduleStore,
    userProfiles,
    userPosts
  },
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  // user getters method here ......
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return state.todos.length
    },
    doneTodosCountGetters: (state, getters) => {
      return getters.doneTodos.length
    },
    doneTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id == id)
    },
    getState(state, getters) {
      console.log('get state in getters method ' + state.count)
    }
  },
  // mutations increment state count here.....
  mutations: {
    actionIncrementDecrement (state) {
      state.count++
    },
    DECREMENT (state) {
      state.count--
    },
    // incrementBy (state, n){
    //   state.count += n
    // },
    // decrementBy (state, n){
    //   state.count -= n
    // }
    incrementBy (state, payload){
      state.count += payload.amount
    },
    decrementBy (state, payload){
      state.count -= payload.amount
    },
    getalertfirst () {
        console.log('getalertfirst');
    },
    getalertsecond () {
      console.log('getalertsecond')
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
      console.log('get state ' + context.state.count);
      context.commit('getalertfirst', await console.log('getalertsecond'))
    }
  }
  
})
