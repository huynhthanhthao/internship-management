const state = {
  showUpdate: false,
};

const getters = {
  getShowUpdate(state) {
    return state.showUpdate;
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
