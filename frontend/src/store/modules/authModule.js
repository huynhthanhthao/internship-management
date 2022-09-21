const authModules = {
    state: {
        isLogin: true,
    },
    getters: {
        getIsLogin(state) {
            return state.isLogin;
        },
    },
    mutations: {
        LOGOUT(state) {
            state.isLogin = false;
        },
    },
    actions: {},
};

export default authModules;
