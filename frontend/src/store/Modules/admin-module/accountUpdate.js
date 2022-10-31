const accountUpdate = {
    state: {
        accountUpdate: {},
    },

    getters: {
        getAccountUpdate(state) {
            return state.accountUpdate;
        },
    },
    mutations: {
        SET_ACCOUNT_UPDATE(state, account) {
            state.accountUpdate = account;
        },
    },
};
export default accountUpdate;
