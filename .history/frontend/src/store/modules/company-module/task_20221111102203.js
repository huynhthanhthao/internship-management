import axios from "axios";
import config from "@/config/index.js";
const token = localStorage.getItem("token");
const taskModule = {
    state() {
        return { taskList: [], taskCurrent: {} };
    },
    getters: {
        getTaskList(state) {
            return state.taskList;
        },
        getTaskCurrent(state) {
            return state.taskCurrent;
        },
    },
    mutations: {
        SET_TASK_LIST(state, taskList) {
            state.taskList = taskList;
        },
        SET_TASK_CURRENT(state, taskCurrent) {
            state.taskCurrent = taskCurrent;
        },
        ADD_TASK(state, task) {
            state.taskList.push(task);
        },
        DELETE_TASK(state, taskId) {
            for (let i = 0; i < state.taskList.length; i++) {
                if (state.taskList[i]._id == taskId) {
                    state.taskList.splice(i, 1);
                    return;
                }
            }
        },
    },
    actions: {
        async setTaskList({ commit }, studentId) {
            try {
                const res = await axios.get(
                    `${config.domain}/company/get-all-tasks`,
                    {
                        params: { studentId },
                        headers: { Authorization: "Bearer " + token },
                    }
                );

                commit("SET_TASK_LIST", res.data.result);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteTask({ commit }, taskId) {
            try {
                const res = await axios.delete(
                    `${config.domain}/company/delete-task/`,
                    {
                        headers: { Authorization: "Bearer " + token },

                        data: {
                            taskId,
                        },
                    }
                );

                commit("DELETE_TASK", taskId);
                commit("SET_TOAST", {
                    isSuccess: res.data.status,
                    message: res.data.message,
                });
            } catch (error) {
                console.log(error);
            }
        },
        async addTask({ commit }, task) {
            try {
                const res = await axios.post(
                    `${config.domain}/company/create-task`,
                    {
                        studentId: task.studentId,
                        title: task.title,
                        time: task.time,
                    },
                    { headers: { Authorization: "Bearer " + token } }
                );
                commit("ADD_TASK", res.data.result);

                commit("SET_TOAST", {
                    isSuccess: res.data.status,
                    message: res.data.message,
                });
            } catch (error) {
                console.log(error);
            }
        },
        async assessTask({ commit }, dataAssess) {
            try {
                const res = await axios.patch(
                    `${config.domain}/company/assess-task`,
                    {
                        status: dataAssess.status,
                        message: dataAssess.message,
                        taskId: dataAssess.taskId,
                    },
                    { headers: { Authorization: "Bearer " + token } }
                );

                commit("SET_TOAST", {
                    isSuccess: res.data.status,
                    message: res.data.message,
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
};

export default taskModule;
