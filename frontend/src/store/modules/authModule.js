import axios from "axios";
import config from "../../config/index.js";
import router from "../../router/index";
const authModules = {
    state: {
        isLogin: false,
        rule: "",
    },
    getters: {
        getIsLogin(state) {
            return state.isLogin;
        },
        getRule(state) {
            return state.rule;
        },
    },

    mutations: {
        LOGOUT(state) {
            state.isLogin = false;
        },
        LOGIN(state) {
            state.isLogin = true;
        },
        SET_RULE(state, newRule) {
            state.rule = newRule;
        },
    },
    actions: {
        logout({ commit }) {
            localStorage.clear();
            commit("LOGOUT");
        },
        async login({ commit }, account) {
            const response = await axios.post(`${config.domain}/login`, {
                username: account.username,
                password: account.password,
            });

            const rule = response.data.rule;
            const accessToken = response.data.accessToken;


            if (response.data.accessToken) {
                localStorage.setItem("token", accessToken);
                localStorage.setItem("rule", rule);

                // handle next page

                if (rule == "ADMIN") {router.push("/admin/home")}
                else if (rule == "STUDENT") router.push("/student/home");
                else if (rule == "TEACHER") router.push("/teacher/home");
                else if (rule == "MINISTRY") router.push("/ministry/home");
                else if (rule == "COMPANY") router.push("/company/home");

                commit("LOGIN");
            }

            // Hien thi thong bao
            commit("SET_TOAST", {
                isSuccess: response.data.status,
                message: response.data.message,
            });
        },
        async setRule({ commit }) {
            const token = localStorage.getItem("token");

            const res = await axios.post(
                `${config.domain}/get-rule`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const rule = res.data.rule;

            commit("SET_RULE", rule);
        },
    },
};

export default authModules;
