const state = {
  updateTeacher: false,
};

const getters = {
  getUpdateTeacher(state) {
    return state.updateTeacher;
  },
};

const mutations = {
  UPDATE_TEACHER(state) {
    state.updateTeacher = !state.updateTeacher;
  },
};

const actions = {};

export default { state, getters, mutations, actions };
