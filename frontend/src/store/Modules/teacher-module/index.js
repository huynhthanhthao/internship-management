const state = {
  updateTeacher: false,
  detailStudent: false,
};

const getters = {
  getUpdateTeacher(state) {
    return state.updateTeacher;
  },

  getDetailStudent(state) {
    return state.detailStudent;
  },
};

const mutations = {
  SHOW_UPDATE(state) {
    state.updateTeacher = true;
  },

  CLOSE_UPDATE(state) {
    state.updateTeacher = false;
  },

  SHOW_DETAIL_STUDENT(state) {
    state.detailStudent = true;
  },

  CLOSE_DETAIL_STUDENT(state) {
    state.detailStudent = false;
  },
};

const actions = {};

export default { state, getters, mutations, actions };