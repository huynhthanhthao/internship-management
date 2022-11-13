<template>
    <div
        class="modal fade"
        id="createAccount"
        aria-labelledby="modalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Thêm tài khoản
                    </h1>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form class="row p-3">
                        <div class="infor">
                            <div class="mb-3 row">
                                <label
                                    for="inputName"
                                    class="col-form-label px-0"
                                    ><strong>Tên đầy đủ:</strong></label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputName"
                                    name="name"
                                    v-model="name"
                                />
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputUsername"
                                    class="col-form-label px-0"
                                    ><strong>Tên người dùng:</strong></label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputUsername"
                                    name="username"
                                    v-model="username"
                                />
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputPassword"
                                    class="col-form-label px-0"
                                    ><strong>Mật khẩu:</strong></label
                                >
                                <input
                                    type="password"
                                    class="form-control"
                                    id="inputPassword"
                                    name="password"
                                    v-model="password"
                                />
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputTypeAccount"
                                    class="col-form-label px-0"
                                    ><strong>Loại tài khoản:</strong></label
                                >
                                <select
                                    class="form-select select-type-account"
                                    aria-label="Select Type Account"
                                    id="inputTypeAccount"
                                    name="typeAccount"
                                    @change="selectTypeAccount($event)"
                                    v-model="typeAccount"
                                >
                                    <option selected value="TEACHER">
                                        Giảng viên
                                    </option>
                                    <option value="STUDENT">Sinh viên</option>
                                    <option value="COMPANY">
                                        Đơn vị thực tập
                                    </option>
                                </select>
                            </div>
                            <div
                                class="mb-3 row px-0 semester-schoolYear justify-content-between student-info d-none"
                            >
                                <div class="student-class col-4 p-0">
                                    <label
                                        for="inputClass"
                                        class="col-form-label px-0"
                                        ><strong>Lớp:</strong></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputClass"
                                        name="studentClass"
                                        v-model="studentClass"
                                    />
                                </div>
                                <div class="semester col-3 p-0">
                                    <label
                                        for="inputSemester"
                                        class="col-form-label px-0"
                                        ><strong>Học kỳ:</strong></label
                                    >
                                    <select
                                        class="form-select select-semester"
                                        aria-label="Select Semester"
                                        id="inputSemester"
                                        name="semester"
                                        v-model="semester"
                                    >
                                        <option selected value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">Hè</option>
                                    </select>
                                </div>
                                <div class="semester col-4 p-0">
                                    <label
                                        for="inputSchoolYear"
                                        class="col-form-label px-0"
                                        ><strong>Niên khóa:</strong></label
                                    >
                                    <select
                                        class="form-select select-schoolYear"
                                        aria-label="Select School Year"
                                        id="inputSchoolYear"
                                        name="schoolYear"
                                        v-model="schoolYear"
                                    >
                                        <option selected value="2020-2021">
                                            2020-2021
                                        </option>
                                        <option value="2021-2022">
                                            2021-2022
                                        </option>
                                        <option value="2022-2023">
                                            2022-2023
                                        </option>
                                        <option value="2023-2024">
                                            2023-2024
                                        </option>
                                        <option value="2024-2025">
                                            2024-2025
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Đóng
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="handleCreateAccount"
                        data-bs-dismiss="modal"
                        :disabled="checkDisable"
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index";

export default {
    name: "CreateAccount",
    data() {
        return {
            avatar: {
                path: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
                height: 160,
                width: 160,
            },
            username: "",
            password: "",
            name: "",
            studentClass: "",
            typeAccount: "TEACHER",
            semester: "1",
            schoolYear: "2020-2021",
        };
    },
    methods: {
        checkDisable() {
            if (
                !this.username ||
                !this.password ||
                !this.name ||
                !this.typeAccount
            ) {
                if (this.typeAccount === "STUDENT") {
                }
            }
        },
        selectTypeAccount(event) {
            const type = event.target.value;
            const studentClass = document.querySelector(".student-info");
            if (type == "STUDENT") {
                studentClass.classList.remove("d-none");
            } else {
                if (!studentClass.classList.contains("d-none"))
                    studentClass.classList.add("d-none");
            }
        },
        async handleCreateAccount() {
            const token = localStorage.getItem("token");

            const res = await axios.post(
                `${config.domain}/admin/create-account`,
                {
                    username: this.username.trim(),
                    password: this.password.trim(),
                    name: this.name.trim(),
                    typeAccount: this.typeAccount,
                    studentClass: this.studentClass.trim(),
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

            if (res.data.status) {
                this.$store.commit("ADD_ACCOUNT_CURRENT", {
                    _id: res.data.newAccount._id,
                    username: this.username,
                    name: this.name,
                    rule: this.typeAccount,
                });
            }
        },
    },
};
</script>

<style scoped>
.modal-header {
    background-color: #1f5caa;
}
.fullName {
    outline: 0;
    border-width: 0 0 2px;
    border-color: blue;
}

.fullName:focus {
    border-color: green;
}
</style>
