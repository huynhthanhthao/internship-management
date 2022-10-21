import InformationModule from "./information.js";

const modules = {
    InformationModule,
};

const state = {
    detailCompany: false,
};

const getters = {
    getDetailCompany(state) {
        return state.detailCompany;
    },
};

const mutations = {
    SHOW_DETAIL_COMPANY(state) {
        state.detailCompany = true;
    },
    CLOSE_DETAIL_COMPANY(state) {
        state.detailCompany = false;
    },
};

const actions = {};

export default { modules, state, getters, mutations, actions };
