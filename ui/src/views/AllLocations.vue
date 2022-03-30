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
import { onActivated } from "@vue/runtime-core";
export default {
  components: { SingleList },
  name: "AllLocations",
  data() {
    return {
      locations: [],
    };
  },

  /**
   * @vuese
   * Gets all the locations from the Get Locations API and updates the location list on every page reload.
   */
  async mounted() {
    let titles = null;
    try {
      titles = await LocationService.getLocations();
      titles = titles.data;
    } catch (err) {
    }

    for (let i = 0; i < titles.length; i++) {
      this.locations.push(titles[i]);
    }
  },

  async onActivated() {
    this.mounted();
  },

  methods: {
    /**
     * @vuese
     * Redirects the user to a details view of the user selected location from the list.
     */
    async openCard(location) {
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
