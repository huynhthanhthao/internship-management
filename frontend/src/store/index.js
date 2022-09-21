import { createStore } from "vuex";
import authModule from "./modules/authModule.js";
import routersModule from "./modules/routersModule";
import companyModule from "./modules/company-module/index.js";

// Create a new store instance.
const store = createStore({
    modules: { authModule, routersModule, companyModule },
});

export default store;
