import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import VuexExample from './views/VuexExample.vue'
import VuexMudeles from './views/VuexMudeles.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/vuexexample',
      name: 'vuex-example',
      component: VuexExample
    },
    {
      path: '/vuexmudeles',
      name: 'vuex-mudeles',
      component: VuexMudeles
    }
  ]
})
