<template>
  <div class="container">
    <div v-for="getUserProfiles in  getUsersProfiles" :key="getUserProfiles.id">
      <div class="row">
        <div class="col-sm-3">
          {{ getUserProfiles.name }}
        </div>
        <div class="col-sm-3">
          {{ getUserProfiles.email }}
        </div>
        <div class="col-sm-3">
          {{ getUserProfiles.address.city }}
        </div>
        <div class="col-sm-3">
          <router-link :to="{ name: 'profile-details', params: { id : getUserProfiles.id} }">
            <BaseIcon name="user-plus"></BaseIcon>
          </router-link>
          <BaseIcon name="x"></BaseIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getUsersProfiles'])
  }
};
</script>