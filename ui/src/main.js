import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import createAuth0Client from "@auth0/auth0-spa-js";
import config from "../auth_config.json";

const app = createApp(App);

app.config.globalProperties.$auth0 = createAuth0Client({
  domain: config.domain,
  client_id: config.clientId,
});

app.use(router).mount("#app");
