import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import router from "./router/index.js";
import store from "./store/index";

Vue.config.devtools = true;
const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
