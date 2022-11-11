const authModules = {
    state: {
        modal: {
            message: "Hello",
            handle: "test",
        },
    },
    getters: {
        getModal(state) {
            return state.modal;
        },
    },
    mutations: {},
    actions: {},
};

export default authModules;
