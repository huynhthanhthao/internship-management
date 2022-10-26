import axios from "axios";
import config from "../../config/index.js";
import router from "../../router/index";
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
    LOGIN(state) {
      state.isLogin = true;
    },
  },
  actions: {
    logout({ commit }) {
      localStorage.removeItem("user");
      localStorage.removeItem("rule");
      commit("LOGOUT");
    },
    async login({ commit }, account) {
      const response = await axios.post(`${config.domain}/login`, {
        username: account.username,
        password: account.password,
      });

      const rule = response.data.rule;
      const accessToken = response.data.accessToken;
      const accountInfor = response.data.accountInfor;

      if (response.data.accessToken) {
        localStorage.setItem("user", accessToken);
        localStorage.setItem("rule", rule);

        // handle next page

        if (rule == "ADMIN") router.push("/admin/home");
        else if (rule == "STUDENT") router.push("/student/home");
        else if (rule == "TEACHER") router.push("/teacher/home");
        else if (rule == "MINISTRY") router.push("/ministry/home");
        else if (rule == "COMPANY") router.push("/company/home");

        commit("LOGIN");
        // Save account login to store account
        commit("SET_ACCOUNT", accountInfor);
      }

      // Hien thi thong bao
      commit("SET_TOAST", {
        isSuccess: response.data.status,
        message: response.data.message,
      });
    },
  },
};

export default authModules;
