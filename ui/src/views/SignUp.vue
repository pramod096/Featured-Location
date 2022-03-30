<template>
  <div class="container text-center">
    <div class="card mx-auto">
      <div class="card-header">
        <span>SIGN UP</span>
      </div>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model="userName"
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email ID</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email ID"
            required
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button class="button" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import UserService from "../UserService";
import router from "@/router";

export default {
  name: "SignUp",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    /**
     * @vuese
     * Sends the new user credentials to the data and registers the user.
     */
    async submit() {
      let users = null;
      let duplicate = false;

      try {
        users = await UserService.getUsers();
        users = users.data;
      } catch (err) {
        window.alert(err);
      }

      for (let i = 0; i < users.length; i++) {
        if (
          users[i].userName == this.userName ||
          users[i].email == this.email
        ) {
          duplicate = true;
          break;
        }
      }

      if (duplicate) window.alert("Username or Email already taken");
      else {
        await UserService.postUser(this.userName, this.email, this.password);
        window.alert("Account Created! Login to Continue.");
        router.push("/login");
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
  margin: 1rem 0rem;
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
