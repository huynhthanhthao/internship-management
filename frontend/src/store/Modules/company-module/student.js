import axios from "axios";
import config from "@/config/index.js";
const studentModule = {
    state: {
        studentList: [],
        studentDetail: {},
    },
    getters: {
        getStudentList(state) {
            return state.studentList;
        },
        getStudentDetail(state) {
            return state.studentDetail;
        },
    },
    mutations: {
        SET_STUDENT_LIST(state, studentList) {
            state.studentList = studentList;
        },
        SET_STUDENT_DETAIL(state, studentDetail) {
            state.studentDetail = studentDetail;
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
