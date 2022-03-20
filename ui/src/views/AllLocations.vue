<template>
  <div class="conatiner">
    <div class="list" v-for="location in locations" :key="location">
      <SingleList :title="location.locationName" @click="openCard(location)" />
    </div>
  </div>
</template>

<script>
import LocationService from "../LocationService";
import SingleList from "../components/SingleList.vue";
import router from "@/router";
import { onActivated } from '@vue/runtime-core';
export default {
  components: { SingleList },
  name: "AllLocations",
  data() {
    return {
      locations: [],
    };
  },

  async mounted() {
    /**
     * @vuese
     * Gets all the locations from the Get Locations API and updates the location list on every page reload.
     */
    let titles = null;
    try {
      titles = await LocationService.getLocations();
      titles = titles.data;
      console.log(titles);
    } catch (err) {
      console.log(err);
    }

    for (let i = 0; i < titles.length; i++) {
      this.locations.push(titles[i]);
      console.log(this.locations);
    }
  },

  async onActivated() {
<<<<<<< HEAD
     this.mounted();
=======
    this.mounted();
>>>>>>> c135ee4c833f106b55dc6e6c479c5caab4555cd7
  },

  methods: {
    async openCard(location) {
      /**
       * @vuese
       * Redirects the user to a details view of the user selected location from the list.
       */
      sessionStorage.setItem("currentLocation", JSON.stringify(location));
      await router.push("/");
    },
  },
};
</script>

<style scoped>
.list {
  margin: 1.5rem;
  cursor: default;
}
</style>
