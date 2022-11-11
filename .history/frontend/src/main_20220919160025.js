import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
