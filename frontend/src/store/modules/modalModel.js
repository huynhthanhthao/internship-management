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
    actions: {
        test(state) {
            console.log(state, 123);
        },
    },
};

export default authModules;
