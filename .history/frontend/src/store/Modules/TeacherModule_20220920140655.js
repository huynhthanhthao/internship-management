const state = {
  showUpdate: false,
};

const getters = {
  getShowInfor(state) {
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

const actions = {
  updateInfor(state) {},
};

export default { state, getters, mutations, actions };
