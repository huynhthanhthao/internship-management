const state = {
  showUpdate: true,
};

const getters = {
  getShowUpdate(state) {
    return state.showUpdate;
  },
};

const mutations = {
  SHOW_UPDATE(state) {
    state.showUpdate = false;
  },

  CLOSE_UPDATE(state) {
    state.showUpdate = false;
  },
};

const actions = {};

export default { state, getters, mutations, actions };
