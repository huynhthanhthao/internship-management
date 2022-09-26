const state = {
  showUpdate: false,
};

const getters = {
    getShowInfor(state){
        return state.showUpdate;
    }
};

const mutations = {

};

const actions = {
    updateInfor(state) {
        SHOW_UPDATE(state){
            state.showUpdate = true;
        } 
        
    }
};

export default { state, getters, mutations, actions };
