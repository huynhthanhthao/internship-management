const companyModule = {
    state: {
        isShowDetailRegister: false,
    },
    getters: {
        getShowDetailRegister(state) {
            return state.isShowDetailRegister;
        },
    },
    mutations: {
        SHOW_DETAIL_REGISTER(state) {
            state.isShowDetailRegister = true;
        },
        CLOSE_DETAIL_REGISTER(state) {
            state.isShowDetailRegister = false;
        },
    },
    actions: {},
};

export default companyModule;
