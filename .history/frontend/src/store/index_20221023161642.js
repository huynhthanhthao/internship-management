import { createStore } from "vuex";
import teacherModule from "./modules/teacher-module/index.js";
import studentModule from "./modules/student-module/index.js";
import authModule from "./modules/authModule.js";
import routersModule from "./modules/routersModule";
import companyModule from "./modules/company-module/index.js";
import modalModule from "./modules/modalModel.js";
import toastModule from "./modules/toastModule.js";
import account from "./modules/account.js";

// Create a new store instance.
const store = createStore({
  modules: {
    teacherModule,
    studentModule,
    authModule,
    routersModule,
    companyModule,
    modalModule,
    toastModule,
    account,
  },
});

export default store;
