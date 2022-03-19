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
            <button class="button" v-if="!null">Home</button>
          </router-link>

         
            <button class="button" v-if="authenticated && !this.loading"    data-toggle="modal"
            data-target="#edit">
              Edit
            </button>
        
            <div
            class="modal fade"
            id="edit"
            tabindex="-1"
            role="dialog"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="editModalLabel">
                    Enter Passcode to Edit Location
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Cancel"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <label for="passcode" class="col-form-label">Passcode:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="passcode"
                    v-model="passcode"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="editLocation()"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            class="button"
            v-if="authenticated && !this.loading"
            data-toggle="modal"
            data-target="#delete"
          >
            Delete
          </button>

          <div
            class="modal fade"
            id="delete"
            tabindex="-1"
            role="dialog"
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Enter Passcode to Delete Location
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Cancel"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <label for="passcode" class="col-form-label">Passcode:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="passcode"
                    v-model="passcode"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    @click="deleteLocation"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <router-link to="/addLocation" tag="button">
            <button class="button" v-if="authenticated && !this.loading">
              Add
            </button>
          </router-link>
          <router-link
            to="/SignUp"
            tag="button"
            v-if="!authenticated && !this.loading"
          >
            <button class="button">Sign Up</button>
          </router-link>

          <button
            class="button"
            @click="login"
            v-if="!authenticated && !this.loading"
          >
            Login
          </button>

          <button
            class="button"
            @click="logout"
            v-if="authenticated && !this.loading"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from "../router";
import LocationService from "../LocationService";
export default {
  name: "Header",
  data() {
    return {
      auth0: null,
      data: null,
      loading: true,
      authenticated: false,
      passcode: "",
    };
  },
  async mounted() {
    /**
     * @vuese
     * Checks whether a user is authenticated or not, everytime the app is reloaded.
     */
    this.auth0 = await this.$auth0;

    this.data = await this.auth0.getUser();

    if (this.data == undefined) {
      this.authenticated = false;
    } else {
      this.authenticated = true;
    }

    this.loading = false;

    console.log("mounted auth0", this.auth0);
    console.log("mounted data", this.data);
    console.log("mounted aunthenti", this.authenticated);
  },
  // await this.user.loginWithPopup({});

  // this.data = await this.user.getUser();

  // console.log(this.data);

  methods: {
    async login() {
      /**
       * @vuese
       * Redirects the user to login page.
       */
      try {
        await this.auth0.loginWithPopup({});
      } catch (e) {
        window.alert("Login Cancelled");
      }

      this.data = await this.auth0.getUser();

      console.log("login data", this.data);

      if (this.data == undefined) {
        this.authenticated = false;
      } else {
        this.authenticated = true;
      }
    },

    async logout() {
      /**
       * @vuese
       * Logs out the users.
       */
      await this.auth0.logout({});

      this.data = await this.auth0.getUser();

      if (this.data == undefined) {
        this.authenticated = false;
      } else {
        this.authenticated = true;
      }
    },

    async deleteLocation() {
      if (this.passcode === "123") {
        const currentLocation = await JSON.parse(
          sessionStorage.getItem("currentLocation")
        );
        await LocationService.deleteLocation(currentLocation);
        sessionStorage.removeItem("currentLocation");
        window.alert("Location Deleted Successfully");
        router.go("/");
      } else {
        window.alert("Invalid Passcode");
      }
    },

    async editLocation() {
      if(this.passcode === "123"){
      await router.push('/editLocation')
      } else {
        window.alert("Invalid Passcode");
      }
    }
  },
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
  width: fit-content;
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
  font-size: 1.8rem;
  font-family: Luminari, fantasy;
  font-weight: 100;
  text-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}
</style