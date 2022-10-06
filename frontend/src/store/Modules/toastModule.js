const toastModules = {
    state: {
        toast: {
            isSuccess: true,
            isShow: false,
            message: "This is message",
        },
    },
    getters: {
        getToast(state) {
            return state.toast;
        },
    },
    mutations: {
        CLOSE_TOAST(state) {
            state.toast.isShow = false;
        },
        SHOW_TOAST(state) {
            state.toast.isShow = true;
        },
    },
    actions: {},
};

export default toastModules;
