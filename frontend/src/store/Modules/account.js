import config from "../../config/index.js";
import axios from "axios";

const accountModule = {
    state: {
        account: {},
    },

    getters: {
        getAccount(state) {
            return state.account;
        },
    },
    mutations: {
        SET_ACCOUNT(state, accountInfor) {
            state.account = accountInfor;
        },
    },
    actions: {
        async setAccount({ commit }) {
            const token = localStorage.getItem("token");
            // set account store
            if (token) {
                const response = await axios.post(
                    `${config.domain}/get-account`,
                    {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    }
                );
                commit("SET_ACCOUNT", response.data.result);
            }
        },
    },
};
export default accountModule;
