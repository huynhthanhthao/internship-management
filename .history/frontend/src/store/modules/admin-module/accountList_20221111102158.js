const accountListModule = {
    state: {
        accountCurrent: [],
    },

    getters: {
        getAccountCurrent(state) {
            return state.accountCurrent;
        },
    },
    mutations: {
        SET_ACCOUNT_CURRENT(state, accountCurrent) {
            state.accountCurrent = accountCurrent;
        },
        ADD_ACCOUNT_CURRENT(state, account) {
            state.accountCurrent.push(account);
        },
        DELETE_ACCOUNT_CURRENT(state, id) {
            for (let i = 0; i < state.accountCurrent.length; i++) {
                if (state.accountCurrent[i]._id == id) {
                    state.accountCurrent.splice(i, 1);
                    return;
                }
            }
        },
    },
    actions: {},
};
export default accountListModule;
