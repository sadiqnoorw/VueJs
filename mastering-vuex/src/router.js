import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import VuexExample from './views/VuexExample.vue'
import UserProfiles from './views/UserProfiles.vue';
import ProfileDetals from './views/ProfileDetals.vue';

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
      path: '/UserProfiles',
      name: 'user-profiles',
      component: UserProfiles
    },
    {
      path: '/Profile/:id',
      name: 'profile-details',
      component: ProfileDetals,
      props: true
    }
  ]
})
