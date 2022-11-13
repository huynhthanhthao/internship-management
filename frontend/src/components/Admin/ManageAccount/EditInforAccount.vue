<template>
    <div
        class="modal fade"
        id="editInforAccount"
        tabindex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Cập nhật thông tin tài khoản
                    </h1>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form class="row py-2 px-3">
                        <div class="infor col-12">
                            <div class="mb-3 row">
                                <label
                                    for="name"
                                    class="col-form-label px-0 py-2"
                                    ><strong>Tên đăng nhập:</strong></label
                                >
                                <div class="form-control text-center" id="name">
                                    {{ accountUpdate.username }}
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="fullname"
                                    class="col-form-label px-0 py-2"
                                    ><strong>Tên đầy đủ:</strong></label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="fullname"
                                    v-model="accountUpdate.name"
                                />
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="password"
                                    class="col-form-label px-0 py-2"
                                    ><strong>Mật khẩu:</strong></label
                                >
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    v-model="accountUpdate.password"
                                />
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
                        data-bs-dismiss="modal"
                        @click="handleUpdateAccount"
                        :disabled="
                            !accountUpdate.name || !accountUpdate.password
                        "
                    >
                        Lưu thay đổi
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import config from "@/config/index.js";
export default {
    name: "EditInforAccount",
    data() {
        return {
            avatar: {
                path: "https://images.unsplash.com/photo-1664745027113-0145831af78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80",
                height: 160,
                width: 160,
            },
        };
    },
    methods: {
        selectTypeAccount(event) {
            const type = event.target.value;
            const studentClass = document.querySelector(
                ".student-class-update"
            );
            if (type == 2) {
                studentClass.classList.remove("d-none");
            } else {
                if (!studentClass.classList.contains("d-none"))
                    studentClass.classList.add("d-none");
            }
        },
        async handleUpdateAccount() {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.patch(
                    `${config.domain}/admin/update-account`,
                    {
                        accountId: this.accountUpdate._id,
                        name: this.accountUpdate.name.trim(),
                        password: this.accountUpdate.password.trim(),
                    },
                    { headers: { Authorization: "Bearer " + token } }
                );

                this.$store.commit("SET_TOAST", {
                    message: res.data.message,
                    isSuccess: res.data.status,
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
    computed: mapGetters({
        accountUpdate: "getAccountUpdate",
    }),
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
