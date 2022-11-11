const StudentList = {
  state: {
    className: [],
    currentList: [],
    studentActive: {},
  },
  getters: {
    getClassName(state) {
      return state.className;
    },
    getCurrentList(state) {
      return state.currentList;
    },
    getStudentActive(state) {
      return state.studentActive;
    },
  },
  mutations: {
    SET_CLASS_NAME(state, className) {
      state.className = className;
    },
    SET_CURRENT_LIST(state, currentList) {
      state.currentList = currentList;
    },
    SET_STUDENT_ACTIVE(state, student) {
      state.studentActive = student;
    },
  },
  actions: {},
};

export default StudentList;
