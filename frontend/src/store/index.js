import { createStore } from "vuex";
import teacherModule from "./modules/teacher-module/index.js";
import authModule from "./modules/authModule.js";
import routersModule from "./modules/routersModule";
import companyModule from "./modules/company-module/index.js";
import modalModule from "./modules/modalModel.js";

// Create a new store instance.
const store = createStore({
    modules: {
        teacherModule,
        authModule,
        routersModule,
        companyModule,
        modalModule,
    },
});

export default store;
