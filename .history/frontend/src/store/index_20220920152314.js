import { createStore } from "vuex";
import TeacherModule from "./Modules/TeacherModule.js";
import StudentModule from "./Modules/StudentModule.js";
// Create a new store instance.
const store = createStore({
  modules: { TeacherModule, StudentModule },
});

export default store;
