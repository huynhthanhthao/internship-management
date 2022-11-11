import axios from "axios";
import config from "@/config/index.js";
const studentModule = {
    state: {
        studentList: [],
        studentTraining: [],
        studentDetail: {},
        studentTrainingDetail: {},
    },
    getters: {
        getStudentList(state) {
            return state.studentList;
        },
        getStudentTraining(state) {
            return state.studentTraining;
        },
        getStudentDetail(state) {
            return state.studentDetail;
        },
        getStudentTrainingDetail(state) {
            return state.studentTrainingDetail;
        },
    },
    mutations: {
        SET_STUDENT_LIST(state, studentList) {
            state.studentList = studentList;
        },
        SET_STUDENT_TRAINING(state, studentTraining) {
            state.studentTraining = studentTraining;
        },
        SET_STUDENT_TRAINING_DETAIL(state, studentTrainingDetail) {
            state.studentTrainingDetail = studentTrainingDetail;
        },
        SET_STUDENT_DETAIL(state, studentDetail) {
            state.studentDetail = studentDetail;
        },
        DELETE_STUDENT(state, studentId) {
            for (let i = 0; i < state.studentList.length; i++) {
                if (state.studentList[i].id == studentId) {
                    state.studentList.splice(i, 1);
                }
            }
        },
    },
    actions: {
        async setStudentDetail({ commit }, payload) {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(
                    `${config.domain}/company/get-infor-register`,
                    {
                        params: {
                            companyId: payload.companyId,
                            studentId: payload.studentId,
                        },
                        headers: { Authorization: "Bearer " + token },
                    }
                );

                commit("SET_STUDENT_DETAIL", res.data.result);
            } catch (error) {
                console.log(error);
            }
        },
    },
};

export default studentModule;
