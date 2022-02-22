<template>
  <div class="container text-center">
    <div class="card mx-auto">
      <div class="card-header">
        <span>EDIT LOCATION</span>
      </div>
      <form
        @submit.prevent="submit"
        method="PATCH"
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
  name: "EditLocation",
  data() {
    return {
      id: "",
      locationName: "",
      address: "",
      hours: "",
      phoneNumber: "",
    };
  },
  methods: {
    async submit() {
      await LocationService.patchLocation(new FormData(locationForm));
      console.log("form dat ----", new FormData(locationForm));
    },
  },
};
</script>
