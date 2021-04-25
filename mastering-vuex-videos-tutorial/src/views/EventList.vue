<template>
  <div>
    <h1>Listing {{ user.user.name }} {{ event.eventsTotal}}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page !=1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1}}" rel="prev"> prev page</router-link> |
    </template>
    <template v-if="nextPage">
      <router-link :to="{ name: 'event-list', query: { page: page + 1}}" rel="next"> next page</router-link>
      </template>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
//import EventService from "@/Services/EventServices.js";
import {mapState} from 'vuex'
export default {
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page
      })
     // console.log(eventsTotal)
  },
  computed: {
    page(){
      return parseInt(this.$route.query.page) || 1
    },
    nextPage(){
      return this.event.eventsTotal > this.page * 3
    },
    ...mapState(['event', 'user'])
  }
  
};
</script>
