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
            type="text"
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
      editLocation: null,
      _id: "",
      locationName: "",
      address: "",
      hours: "",
      phoneNumber: "",
      likeCount: 0
    };
  },
  async mounted() {
         this.editLocation = await JSON.parse(
      sessionStorage.getItem("currentLocation")
    );
     this._id = this.editLocation._id;
      this.locationName = this.editLocation.locationName;
       this.address = this.editLocation.address;
        this.hours = this.editLocation.hours;
         this.phoneNumber = this.editLocation.phoneNumber;
         this.photo = this.editLocation.photo;
  },
  methods: {
    async submit() {
      let editL = new FormData(locationForm);
      editL.append('_id', this._id);
      editL.append('photo', this.photo)
      await LocationService.putLocation(editL);
      console.log("form dat ----", editL);
      router.push('/allLocations')
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
