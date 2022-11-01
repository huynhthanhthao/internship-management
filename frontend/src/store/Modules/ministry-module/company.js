const companyModule = {
    state: {
        companyList: [],
        companyDetail: {},
    },
    getters: {
        getCompanyList(state) {
            return state.companyList;
        },
        getCompanyDetail(state) {
            return state.companyDetail;
        },
    },
    mutations: {
        SET_COMPANY_LIST(state, companyList) {
            state.companyList = companyList;
        },
        SET_COMPANY_DETAIL(state, company) {
            state.companyDetail = company;
        },
    },
    actions: {},
};

export default companyModule;
