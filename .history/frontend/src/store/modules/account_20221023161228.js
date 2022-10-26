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
    async getInforAccount() {},
  },
};
export default accountModule;
