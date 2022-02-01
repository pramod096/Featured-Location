<template>
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="photo" id="file" />
    <input type="text" name="fname" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import LocationService from "../LocationService";
import router from "@/router";

export default {
  name: "imageUpload",
  data() {
    return {
      fName: "",
      photo: null,
    };
  },
  methods: {
    async submit() {
      await LocationService.postLocation();
    },
  },
};
</script>

