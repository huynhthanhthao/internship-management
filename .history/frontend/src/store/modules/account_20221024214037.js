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
  mutations: {
    SET_ACCOUNT(state, newAccount) {
      state.account.username = newAccount.username;
      state.account.name = newAccount.name;
      state.account.email = newAccount.email;
      state.account.phoneNumber = newAccount.phoneNumber;
    },
  },
  actions: {
    async getInforAccount() {
      // const token = localStorage.getItem("token");
      // //Mình cần get infor của cái account mới đăng nhập bằng
      // axios.get(...../get-acocunt, {idAccount}, {token});
      // axios các thứ ở đây
      // console.log(idAccount);
    },
  },
};
export default accountModule;
