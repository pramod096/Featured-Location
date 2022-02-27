<template>
  <div class="container">
    <Header />
    <router-view> </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>

*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
  margin: 0%;
  padding: 0%;
}


</style>
