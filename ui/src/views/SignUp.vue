<template>
  <div class="container text-center">
    <div class="card mx-auto">
      <div class="card-header">
        <span>SIGN UP</span>
      </div>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <label for="email">Email ID</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email ID"
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
            placeholder="Password"
          />
        </div>
        <router-link to="/allLocations" tag="button">
          <button class="button">Sign Up</button>
        </router-link>
      </form>
    </div>
  </div>
</template>
