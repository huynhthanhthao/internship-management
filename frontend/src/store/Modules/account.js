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
    actions: {},
};
export default accountModule;
