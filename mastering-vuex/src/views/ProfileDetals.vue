<template>
  <div class="container">
    {{ getProfilesDetails }}
    <br>
    <br>
    {{ getUserPostsById }}
  </div>
</template>

<script>
//import { mapGetters } from 'vuex';

export default {
  props: ['id'],
  data(){
    return {
      profile: []
    }
  },
  computed: {
    getProfilesDetails() {
      return this.$store.getters.getProfilesDetails(this.id)
    },
    getUserPostsById() {
      return this.$store.getters.getUserPostsById(this.id)
    }
//    ...mapGetters(['getProfilesDetails'])
  }
};
</script>