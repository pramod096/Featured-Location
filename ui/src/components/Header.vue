<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-dark">
      <span class="logo">MARYVILLE GUIDE</span>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#expandNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="expandNav">
        <div class="navbar-nav ml-auto">
          <router-link to="/" tag="button">
            <button class="button">Home</button>
          </router-link>
          <router-link to="/login" tag="button">
            <button class="button">Sign Up</button>
          </router-link>
          <router-link to="/login">
            <button class="button">Login</button>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.container {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.button {
  font-weight: bold;
  padding: 1rem;
  font-size: 1.1rem;
  margin: 0.5rem;
  border: none;
  outline: none;
  border-radius: 22px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  transition: box-shadow 500ms;
}
</style>