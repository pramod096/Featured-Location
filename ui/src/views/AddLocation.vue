<template>
  <div class="container text-center">
    <div class="card mx-auto">
      <div class="card-header">
        <span>ADD LOCATION</span>
      </div>
      <form
        @submit.prevent="submit"
        method="POST"
        enctype="multipart/form-data"
        id="locationForm"
      >
        <div class="form-group">
          <label for="locationName">Location Name</label>
          <input
            v-model="locationName"
            type="text"
            class="form-control"
            id="locationName"
            name="locationName"
            placeholder="Location Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input
            v-model="address"
            type="text"
            class="form-control"
            id="address"
            name="address"
            placeholder="Address"
            required
          />
        </div>
        <div class="form-group">
          <label for="hours">Hours</label>
          <input
            v-model="hours"
            type="text"
            class="form-control"
            id="hours"
            name="hours"
            placeholder="Hours"
            required
          />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input
            v-model="phoneNumber"
            type="number"
            class="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            required
          />
        </div>
        <div class="form-group">
          <label for="photo">Upload Image</label>
          <input
            type="file"
            class="form-control"
            name="photo"
            id="photo"
            required
          />
        </div>
        <button class="button" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import LocationService from "../LocationService";
import router from "@/router";

export default {
  name: "SignUp",
  data() {
    return {
      locationName: "",
      address: "",
      hours: "",
      phoneNumber: "",
    };
  },
  methods: {
    async submit() {
      await LocationService.postLocation(new FormData(locationForm));
      console.log("form dat ----", new FormData(locationForm));
    },
  },
};
</script>

<style scoped>
.card {
  width: 26rem;
  height: fit-content;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border: none;
  outline: none;
  border-radius: 22px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.card-header {
  font-weight: 100;
  font-family: Luminari, fantasy;
  font-size: 1.8rem;
  border: none;
  outline: none;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  background-color: #e0e5ec;
  margin: 2rem 0rem;
}

.form-control {
  width: 25rem;
  height: max-content;
  font-weight: bold;
  padding: 1rem;
  font-size: 1.1rem;
  border: none;
  outline: none;
  border-radius: 22px;
  background-color: #e0e5ec;
  box-shadow: inset 9px 9px 16px rgb(163, 177, 198, 0.6),
    inset -9px -9px 16px rgba(255, 255, 255, 0.5);
  transition: box-shadow 500ms;
}

.button {
  width: 25rem;
  font-weight: bold;
  padding: 1rem;
  font-size: 1.1rem;
  margin: 1rem 0rem;
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
