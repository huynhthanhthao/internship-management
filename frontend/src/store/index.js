import { createStore } from "vuex";
import testModule from "./modules/test";
// Create a new store instance.
const store = createStore({
    modules: { testModule },
});

export default store;
