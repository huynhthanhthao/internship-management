const authModules = {
  state: {
    isLogin: false,
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
