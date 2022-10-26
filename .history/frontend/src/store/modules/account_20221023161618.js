import jwt from "jsonwebtoken";
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
    async getInforAccount() {
      const token = localStorage.getItem("token");
      const idAccount = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log(idAccount);
    },
  },
};
export default accountModule;
