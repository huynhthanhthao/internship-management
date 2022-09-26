const state = {
  updateTeacher: true,
};

const getters = {
  getUpdateTeacher(state) {
    return state.updateTeacher;
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
