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

export default { state, getters, mutations, actions };
