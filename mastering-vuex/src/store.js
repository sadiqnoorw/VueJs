import Vue from 'vue'
import Vuex from 'vuex'
import { mutation } from '../mutation-types'
Vue.use(Vuex)

export default new Vuex.Store({
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
    }
  },
  // mutations increment state count here.....
  mutations: {
    ICREMENT (state) {
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
      context.commit('getalertfirst', await alert('getalertsecond'))
    }
  }
  
})
