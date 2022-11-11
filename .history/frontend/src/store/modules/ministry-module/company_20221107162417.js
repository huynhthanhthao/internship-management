import axios from "axios";
import config from "@/config";
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
  actions: {
    async setCompanyList({ commit }) {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${config.domain}/student/get-company-list`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      commit("SET_COMPANY_LIST", response.data.result);
    },
  },
};

export default companyModule;
