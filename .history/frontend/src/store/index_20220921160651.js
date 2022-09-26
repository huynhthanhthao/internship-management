import { createStore } from "vuex";
import TeacherModule from "./Modules/TeacherModule.js";
import authModule from "./modules/authModule.js";
import routersModule from "./modules/routersModule";
import companyModule from "./modules/company-module/index.js";

// Create a new store instance.
const store = createStore({
  modules: { TeacherModule  authModule, routersModule, companyModule },
});

export default store;
