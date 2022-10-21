const state = {
  updateTeacher: false,
  detailStudent: false,
  showAssess: true,
};

const getters = {
  getUpdateTeacher(state) {
    return state.updateTeacher;
  },

  getDetailStudent(state) {
    return state.detailStudent;
  },

  getShowAssess(state) {
    return state.showAssess;
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

  SHOW_ASSESS(state) {
    state.showAssess = true;
  },
  CLOSE_ASSESS(state) {
    state.showAssess = false;
  },
};

const actions = {};

export default { state, getters, mutations, actions };
