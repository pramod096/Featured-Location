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
export default {
  components: { SingleList },
  name: "AllLocations",
  data() {
    return {
      locations: [{ locationName: "NWMSU" }],
    };
  },

  async created() {
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

  methods: {
    async openCard(location) {
      /**
       * @vuese
       * Redirects the user to a details view of the user selected location from the list.
       */
      sessionStorage.setItem("currentLocation", JSON.stringify(location));
      router.push("/");
    },
  },
};
</script>

<style scoped>
.list {
  margin: 1.5rem;
}
</style>
