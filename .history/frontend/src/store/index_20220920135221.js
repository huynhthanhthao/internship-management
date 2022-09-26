import { createStore } from "vuex";
import TeacherModule from "./Modules/TeacherModule.js";
// Create a new store instance.
const store = createStore({
  modules: { TeacherModule },
});

export default store;
