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
            state.account.id = accountInfor.id;
            state.account.username = accountInfor.username;
            state.account.name = accountInfor.name;
            state.account.email = accountInfor.email;
            state.account.phoneNumber = accountInfor.phoneNumber;
            state.account.urlAvatar = accountInfor.urlAvatar;
        },
    },
    actions: {},
};
export default accountModule;
