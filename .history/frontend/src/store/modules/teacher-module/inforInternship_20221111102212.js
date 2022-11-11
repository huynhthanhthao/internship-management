import axios from "axios";
import config from "../../../config/index.js";

const InforInternship = {
    state: {
        studentInfor: {},
        companyInfor: {},
        progressInfor: [],
        companyAssess: {},
        teacherAssess: {},
    },
    getters: {
        getStudentInfor(state) {
            return state.studentInfor;
        },
        getCompanyInfor(state) {
            return state.companyInfor;
        },
        getProgressInfor(state) {
            return state.progressInfor;
        },
        getCompanyAssess(state) {
            return state.companyAssess;
        },
        getTeacherAssess(state) {
            return state.teacherAssess;
        },
    },
    mutations: {
        SET_STUDENT_INFOR(state, studentInfor) {
            state.studentInfor = studentInfor;
        },
        SET_COMPANY_INFOR(state, companyInfor) {
            state.companyInfor = companyInfor;
        },
        SET_PROGRESS_INFOR(state, progressInfor) {
            state.progressInfor = progressInfor;
        },
        SET_COMPANY_ASSESS(state, companyAssess) {
            state.companyAssess = companyAssess;
        },
        SET_TEACHER_ASSESS(state, teacherAssess) {
            state.teacherAssess = teacherAssess;
        },
    },
    actions: {
        async setStudentInfor({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin thuc tap cua sinh vien.
            const response = await axios.get(
                `${config.domain}/${payload.rule}/get-student-infor`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { studentId: payload.id },
                }
            );

            // Thay doi dinh dang ngay  bat dau thuc tap!
            let startDate = response.data.result.startDate;
            response.data.result.startDate =
                startDate === 0
                    ? 0
                    : new Date(startDate).toLocaleDateString("en-GB");
            commit("SET_STUDENT_INFOR", response.data.result);
        },

        async setCompanyInfor({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin thuc tap cua sinh vien!
            const responseStudent = await axios.get(
                `${config.domain}/${payload.rule}/get-student-infor`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { studentId: payload.id },
                }
            );

            // Lay thong tin don vi thuc tap!
            const companyId = responseStudent.data.result.companyId;
            if (companyId) {
                const response = await axios.get(
                    `${config.domain}/${payload.rule}/get-company-infor`,
                    {
                        headers: { Authorization: "Bearer " + token },
                        params: { companyId: companyId },
                    }
                );
                commit("SET_COMPANY_INFOR", response.data.result);
            }
        },

        async setProgressInfor({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin phan cong cong viec
            const response = await axios.get(
                `${config.domain}/${payload.rule}/get-all-task`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { studentId: payload.id },
                }
            );

            // Thay doi dinh dang thoi gian hoan thanh cong viec
            response.data.result.forEach((task) => {
                task.time = new Date(task.time).toLocaleDateString("en-GB");
            });
            commit("SET_PROGRESS_INFOR", response.data.result);
        },

        async setCompanyAssess({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin danh gia cua don vi thuc tap!
            const response = await axios.get(
                `${config.domain}/${payload.rule}/get-company-assess`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { studentId: payload.id },
                }
            );
            if (!response.data.result) {
                commit("SET_COMPANY_ASSESS", { points: [] });
            } else commit("SET_COMPANY_ASSESS", response.data.result);
        },

        async setTeacherAssess({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin danh gia cua giang vien
            const response = await axios.get(
                `${config.domain}/${payload.rule}/get-assess`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { studentId: payload.id },
                }
            );
            commit("SET_TEACHER_ASSESS", response.data.points);
        },
    },
};

export default InforInternship;
