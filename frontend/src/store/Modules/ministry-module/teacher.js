import axios from "axios";
import config from "@/config/index.js";
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
    actions: {
        async setTeacherDetail({ commit }, teacherId) {
            const token = localStorage.getItem("token");

            const res = await axios.get(
                `${config.domain}/ministry/get-infor-teacher`,
                {
                    params: { teacherId },
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            commit("SET_TEACHER_DETAIL", res.data.result);
        },
    },
};

export default teacherModule;
