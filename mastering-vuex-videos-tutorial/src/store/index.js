import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//import { EventService } from '@/services/EventService.js';
import EventService from '@/Services/EventServices.js'

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: []
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event){
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    }
  },
  modules: {},
  // state: {
  //   count: 1,
  //   user: { id: '3234', name: 'adam jahr'}
  // },
  // getters: {
  //   getUser: state => (ids = 'defualt ')  => {
  //     return state.user.name + " - - - parameters " + ids
  //   }
  // },
  // mutations: {
  //   INCREMENT_COUNT(state, value) {
  //     state.count += value
  //   }
  // },

});
