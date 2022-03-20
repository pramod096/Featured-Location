<template>
  <div class="container text-center">
    <div class="card mx-auto">
      <div class="card-header">
        <span contenteditable="true">{{ currentLocation.locationName }}</span>
      </div>
      <img
        v-bind:src="currentLocation.photo"
        style="height: 300px"
        alt="Location Image"
      />
      <div class="detail" style="margin-top: 1rem">
        Address: {{ currentLocation.address }}
      </div>
      <div class="detail">Hours: {{ currentLocation.hours }}</div>
      <div class="detail">Phone: {{ currentLocation.phoneNumber }}</div>
      <button class="btn ml-auto" @click="likeButton()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="red"
          class="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
          />
        </svg>
        {{ this.currentLocation.likeCount }}
      </button>
    </div>

    <router-link to="/allLocations" tag="button">
      <button class="button">View All</button>
    </router-link>
  </div>
</template>

<script>
import LocationService from "../LocationService";

export default {
  name: "LocationCard",
  data() {
    return {
      currentLocation: {
        locationName: "",
        photo: "",
        address: "",
        phoneNumber: "",
        hours: "",
        likeCount: 0,
        _id: "",
      },
      locations: [],
    };
    `   `;
  },
    /**
     * @vuese
     * Gets all the information about the user selected location from the list and displays dynamically, if not selected by the user, the location is displayed randomly.
     */
  async mounted() {
    this.currentLocation = await JSON.parse(
      sessionStorage.getItem("currentLocation")
    );
    if (this.currentLocation == null) {
      let titles = null;
      try {
        titles = await LocationService.getLocations();
        titles = titles.data;
        console.log("array", titles);
      } catch (err) {
        console.log(err);
      }

      for (let i = 0; i < titles.length; i++) {
        this.locations.push(titles[i]);
      }

      const random = Math.floor(Math.random() * titles.length);
      this.currentLocation = this.locations[random];
      sessionStorage.setItem(
        "currentLocation",
        JSON.stringify(this.currentLocation)
      );
      console.log("here --", this.currentLocation);
      this.currentLocation._id = this.currentLocation._id;
    }
  },

  methods: {
       /**
       * @vuese
       * Increases the like count of current Location.
       */
    async likeButton() {
      this.currentLocation.likeCount += 1;
      await LocationService.likeIncrease(this.currentLocation);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 26rem;
  height: 35rem;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  border: none;
  outline: none;
  border-radius: 22px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.card-header {
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  outline: none;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.detail {
  margin: 0.5rem 0rem;
}

.btn {
  height: 4.2rem;
  width: 4.2rem;
  font-weight: bold;
  font-size: 0.9rem;
  border: none;
  outline: none;
  margin-right: 1rem;
  border-radius: 2rem;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.btn:hover {
  box-shadow: inset 9px 9px 16px rgb(163, 177, 198, 0.6),
    inset -9px -9px 16px rgba(255, 255, 255, 0.5);
}

span {
  color: #363233;
  font-size: 1.5rem;
  font-family: Luminari, fantasy;
  font-weight: 100;
  text-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  outline: none;
  border: none;
}

.button {
  width: 26rem;
  font-weight: bold;
  padding: 1rem;
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border: none;
  outline: none;
  color: #007bff;
  border-radius: 22px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  transition: box-shadow 500ms;
}

.button:hover {
  box-shadow: inset 9px 9px 16px rgb(163, 177, 198, 0.6),
    inset -9px -9px 16px rgba(255, 255, 255, 0.5);
}
</style>
