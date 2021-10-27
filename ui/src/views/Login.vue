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
        </div>
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
  margin: 2rem 0rem;
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
