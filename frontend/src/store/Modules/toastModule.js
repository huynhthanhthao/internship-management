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
            setTimeout(() => {
                state.toast.isShow = false;
            }, 4000);
        },
        SET_TOAST(state, toast) {
            state.toast.isSuccess = toast.isSuccess;
            state.toast.message = toast.message;
            this.commit("SHOW_TOAST");
        },
    },
    actions: {
        setToast({ commit }, toast) {
            commit("SET_TOAST", toast);
        },
    },
};

export default toastModules;
