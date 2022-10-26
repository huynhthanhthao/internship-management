const accountModule = {
  state: {
    account: {
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      urlAvatar: "",
    },
  },

  getters: {
    getAccount(state) {
      return state;
    },
  },
  mutations: {},
  actions: {
    async getInforAccount({ commit }) {},
  },
};
export default accountModule;
