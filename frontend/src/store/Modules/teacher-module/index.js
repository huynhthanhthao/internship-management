import StudentList from "./studentList.js";
import InforInternship from "./inforInternship.js";

const modules = {
  StudentList,
  InforInternship,
};

const state = {
  detailStudent: false,
};

const getters = {
  getDetailStudent(state) {
    return state.detailStudent;
  },
};

const mutations = {
  SHOW_DETAIL_STUDENT(state) {
    state.detailStudent = true;
  },

  CLOSE_DETAIL_STUDENT(state) {
    state.detailStudent = false;
  },
};

const actions = {};

export default { modules, state, getters, mutations, actions };
