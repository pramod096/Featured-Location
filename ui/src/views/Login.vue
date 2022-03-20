<template>
  <div class="container text-center">
    <div class="card mx-auto">
      <div class="card-header">
        <span>LOGIN</span>
      </div>
      <form @submit.prevent="submit">
        <div>
          <label for="userName">Username</label>
          <input
            v-model="userName"
            type="text"
            class="form-control"
            id="userName"
            placeholder="Enter Username"
            required
          />
          <small id="userName" class="form-text text-muted"
            >We'll never share your Username with anyone else.</small
          >
        </div>
        <div>
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
            required
          />
        </div>

        <button class="button" type="submit">Login</button>
      </form>
      <router-link to="/login">Forgot Password</router-link>
    </div>
  </div>
</template>

<script>
import UserService from "../UserService";
import router from "@/router";

export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    /**
     * @vuese
     * Checks the user credentials and logs in the user.
     */
    async submit() {
      console.log("signed");
      let users = null;
      let valid = false;

      try {
        users = await UserService.getUsers();
        users = users.data;
        console.log(users);
      } catch (err) {
        window.alert(err);
      }

      for (let i = 0; i < users.length; i++) {
        if (
          users[i].userName == this.userName &&
          users[i].password == this.password
        ) {
          valid = true;
          break;
        }
      }

      if (!valid) window.alert("Invalid Username or Password");
      else {
        router.push("/allLocations");
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: 26rem;
  height: 35rem;
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
