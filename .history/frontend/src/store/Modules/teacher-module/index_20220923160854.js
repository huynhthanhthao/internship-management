const state = {
  updateTeacher: false,
  showDetailStudent: false,
};

const getters = {
  getUpdateTeacher(state) {
    return state.updateTeacher;
  },
  getShowDetailStudent(state) {
    return state.showDetailStudent;
  },
};

const mutations = {
  SHOW_UPDATE(state) {
    state.updateTeacher = true;
  },

  CLOSE_UPDATE(state) {
    state.updateTeacher = false;
  },
};

const actions = {};

export default { state, getters, mutations, actions };
