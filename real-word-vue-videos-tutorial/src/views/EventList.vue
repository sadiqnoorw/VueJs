<template>
    <div>
        <h1>Listing Event</h1>
        <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue"
import EventService from '@/Services/EventServices.js'

export default {
    components: {
        EventCard,
    },
    data() {
        return {
            events: [],
        }
    },
    created() {
        EventService.getEvents()
        .then(response => {
           this.events = response.data;
        })
        .catch(error => {
            console.log(error)
        })
    }
};

</script>
