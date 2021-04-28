import EventService from '@/Services/EventServices.js'
export const namespaced = true
export const state = {
    events: [],
    eventsTotal: 0,
    event: {}
  }
  export const  getters = {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }

  export const  mutations = {
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
  }

  export const actions = {
    createEvent({ commit, dispatch }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
        const notification = {
          type: 'success',
          message: 'your event has been created!'
        }
        dispatch('notification/add', notification, { root: true })

      })
      .catch( error =>{
        const notification = {
          type: 'error',
          message: 'There was a problem fetching event: '+ error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
    },
    fetchEvents( { commit, dispatch }, {perPage, page}) {
      EventService.getEvents(perPage, page)
      .then((response) => {
        commit(
          'SET_EVENTS_TOTAL',
          parseInt(response.headers['x-total-count'])
        )
        commit('SET_EVENTS', response.data)
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: '+ error.message
        }
        dispatch('notification/add', notification, { root: true })
      });
    },

    fetchEvent( {commit, rootState, getters, dispatch}, id){
      var event =  getters.getEventById(id)
      console.log('user mudoles info' + rootState.user.user.name )
      if(event){
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
              commit('SET_EVENT', response.data)
          }).
          catch(error => {
            const notification = {
              type: 'error',
              message: 'There was a problem fetching event: '+ error.message
            }
            dispatch('notification/add', notification, { root: true })
          })
      }
    }

  }

/*
export const event = {
    state: {
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
}
*/