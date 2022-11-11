import teacherModule from "./teacher.js";
import companyModule from "./company.js";
const ministryModule = {
    modules: { teacherModule, companyModule },
    state() {
        return {
            isShowDetail: false,
        };
    },
    getters: {
        getShowDetail(state) {
            return state.isShowDetail;
        },
    },
    mutations: {
        SHOW_DETAIL(state) {
            state.isShowDetail = true;
        },
        CLOSE_DETAIL(state) {
            state.isShowDetail = false;
        },
    },
};

export default ministryModule;
