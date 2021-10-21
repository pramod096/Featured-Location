<template>
<div class="container text-center">
    <div class="card mx-auto">
      <div class="card-header">
        <span>LOGIN</span>
      </div>
      <form>
        <div class="form-group">
          <label for="email">Email ID</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
          />
          <router-link to="/allLocations" tag="button">
          <button class="button">Login</button>
        </router-link>
      </form>
      <router-link to="/">Forgot Password</router-link>
    </div>
        </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.card {
  width: 26rem;
  height: 35rem;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 22px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}
</style>
