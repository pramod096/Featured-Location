<template>
  <div class="conatiner">
    <div class="list" v-for="title in titles" :key="title">
      <SingleList :title="title" />
    </div>
  </div>
</template>

<script>
import LocationService from "../LocationService";
import SingleList from "../components/SingleList.vue";
export default {
  components: { SingleList },
  name: "AllLocations",
  data() {
    return {
      titles: [
        "NODAWAY COUNTY SOCIETY MUSEUM",
        "MOZINGO LAKE",
        "BACKYARD VINE",
        "BEARCAT STADIUM",
        "MARYVILLE BOARD GAME CAFE",
        "BEARCAT LANES",
      ],
    };
  },

  async created() {
    let titles = null;
    try {
      titles = await LocationService.getLocations();
      titles = titles.data;
      console.log(titles);
    } catch (err) {
      console.log(err);
    }

    for (let i = 0; i < titles.length; i++) {
      this.titles.push(titles[i].name);
      console.log(this.titles);
    }
  },
};
</script>