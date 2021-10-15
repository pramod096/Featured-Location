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

.button:hover {
  box-shadow: inset 9px 9px 16px rgb(163, 177, 198, 0.6),
    inset -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.navbar-toggler:focus,
.navbar-toggler:active {
  outline: none;
  border: none;
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(1,1,1, 2)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.logo {
  color: #363233;
  font-family: Luminari, fantasy;
  font-weight: 100;
  text-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}
</style>