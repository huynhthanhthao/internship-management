import axios from "axios";
import config from "@/config/index.js";
const accountModule = {
    state: {
        account: {
            id: "",
            username: "",
            name: "",
            email: "",
            phoneNumber: "",
            urlAvatar: "",
        },
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
