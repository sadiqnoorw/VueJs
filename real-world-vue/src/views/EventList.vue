<template>
  <div>
    <h1>List Event</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
//import axios from "axios";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events:[]
    }
  },
  created () {
    //axios.get("http://localhost:3000/events")

    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('there was an error:', error.response)
      })
  },

};
</script>
