import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//import { EventService } from '@/services/EventService.js';
//import EventService from '@/Services/EventServices.js'
import user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notification.js';
export default new Vuex.Store({
  modules: {
    user,
    event,
    notification
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  /*
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [],
    eventsTotal: 0,
    event: {}
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  },
  mutations: {
    ADD_EVENT(state, event){
      state.events.push(event)
    },
    SET_EVENTS(state, events){
      state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal){
      state.eventsTotal = eventsTotal
    },
    SET_EVENT(state, event){
      state.event = event
    }
  },

  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents( { commit }, {perPage, page}) {
      EventService.getEvents(perPage, page)
      .then((response) => {
        commit(
          'SET_EVENTS_TOTAL',
          parseInt(response.headers['x-total-count'])
        )
        commit('SET_EVENTS', response.data)
      })
      .catch((error) => {
        console.log(error)
      });
    },

    fetchEvent( {commit, getters}, id){
      var event =  getters.getEventById(id)
      if(event){
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
              commit('SET_EVENT', response.data)
          }).
          catch(error => {
              console.log(error)
          })
      }
    }

  },
  */
  //modules: {},
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
