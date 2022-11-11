const StudentList = {
  state: {
    className: [],
    studentList: [],
    currentList: [],
    studentActive: {},
  },
  getters: {
    getClassName(state) {
      return state.className;
    },
    getStudentList(state) {
      return state.studentList;
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
    SET_STUDENT_LIST(state, studentList) {
      state.studentList = studentList;
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
