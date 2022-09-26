const state = {
  showUpdateTeacher: false,
};

const getters = {
  getShowUpdateTeacher(state) {
    return state.showUpdate;
  },
  getShowInfor() {
    return "Teacher";
  },
};

const mutations = {
  SHOW_UPDATE(state) {
    state.showUpdate = true;
  },

  CLOSE_UPDATE(state) {
    state.showUpdate = false;
  },
};

const actions = {};

export default { state, getters, mutations, actions };
