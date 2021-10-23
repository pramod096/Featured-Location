<template>
  <div class="container">
    <Header />
    <router-view> </router-view>
    <div class="b-row" style="height: 1rem"></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

