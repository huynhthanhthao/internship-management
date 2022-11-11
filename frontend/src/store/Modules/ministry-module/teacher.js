const teacherModule = {
    state: {
        teacherList: [],
        teacherDetail: {},
    },
    getters: {
        getTeacherList(state) {
            return state.teacherList;
        },
        getTeacherDetail(state) {
            return state.teacherDetail;
        },
    },
    mutations: {
        SET_TEACHER_LIST(state, teacherList) {
            state.teacherList = teacherList;
        },
        SET_TEACHER_DETAIL(state, teacher) {
            state.teacherDetail = teacher;
        },
    },
    actions: {},
};

export default teacherModule;
