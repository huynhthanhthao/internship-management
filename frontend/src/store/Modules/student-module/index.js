import InformationModule from "./information.js";
const modules = {
  InformationModule,
};

const state = {
  showCompany: false,
};

const getters = {
  getShowCompany(state) {
    return state.showCompany;
  },
};

const mutations = {
  SHOW_COMPANY(state) {
    state.showCompany = true;
  },
  CLOSE_COMPANY(state) {
    state.showCompany = false;
  },
};

const actions = {};

export default { modules, state, getters, mutations, actions };
