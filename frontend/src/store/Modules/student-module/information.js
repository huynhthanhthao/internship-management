import axios from "axios";
import config from "../../../config/index.js";

const InformationModule = {
    state: {
        information: {
            name: "",
            email: "",
            username: "",
            phoneNumber: "",
        },
    },
    getters: {
        getInformation(state) {
            return state;
        },
    },
    mutations: {
        CHANGE_INFORMATION(state, newInformation) {
            state.information.name = newInformation.name;
            state.information.username = newInformation.username;
            state.information.email = newInformation.email;
            state.information.phoneNumber = newInformation.phoneNumber;
        },
    },
    actions: {
        async changeInformation({ commit }, newInformation) {
            try {
                const response = await axios.put(
                    `${config.domain}/student/update-student-infor`
                );

                console.log(response);
                commit("CHANGE_INFORMATION", newInformation);
            } catch (error) {
                console.log(error);
            }
        },
    },
};

export default InformationModule;
