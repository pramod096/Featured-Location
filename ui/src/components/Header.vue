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