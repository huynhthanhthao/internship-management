<template>
    <div>
        <div class="admin-manage animate__animated animate__fadeIn">
            <TitleStructure :title="`Danh sách tài khoản`"></TitleStructure>
            <div class="type-account col-12 d-flex justify-content-center">
                <div class="type__item" id="all" @click="handleFilter">
                    Tất cả tài khoản
                </div>
                <div class="type__item" id="teacher" @click="handleFilter">
                    Tài khoản giảng viên
                </div>
                <div class="type__item" id="student" @click="handleFilter">
                    Tài khoản sinh viên
                </div>
                <div class="type__item" id="company" @click="handleFilter">
                    Tài khoản đơn vị thực tập
                </div>
            </div>
            <div
                class="list-account mt-5 table-wrapper-scroll-y my-custom-scrollbar"
            >
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">#</th>
                            <th class="text-center" scope="col">
                                Tên người dùng
                            </th>
                            <th class="text-center" scope="col">Họ và tên</th>
                            <th class="text-center" scope="col">
                                Loại tài khoản
                            </th>
                            <th class="text-center" scope="col">Tùy chọn</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            v-for="(account, index) in accountCurrent"
                            :key="index"
                        >
                            <th class="text-center" scope="row">
                                {{ index + 1 }}
                            </th>
                            <td class="text-center">{{ account.username }}</td>
                            <td class="text-center">{{ account.name }}</td>
                            <td class="text-center">{{ account.rule }}</td>
                            <td class="text-center">
                                <button
                                    type="button"
                                    class="btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editInforAccount"
                                    @click="handleSetUpdate(account)"
                                >
                                    <i
                                        class="bi bi-pencil-square text-warning fs-5"
                                    ></i>
                                </button>
                                <button
                                    type="button"
                                    class="btn"
                                    @click="handleDeleteAccount(account._id)"
                                >
                                    <i
                                        class="bi bi-archive-fill text-danger fs-5"
                                    ></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
            <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#createAccount"
            >
                <i class="bi bi-plus-circle-fill"></i> &nbsp; Thêm tài khoản
            </button>
        </div>
        <EditInforAccount></EditInforAccount>

        <CreateAccount></CreateAccount>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import TitleStructure from "../../components/GlobalComponent/TitleStructure.vue";
import EditInforAccount from "../../components/Admin/ManageAccount/EditInforAccount.vue";
import CreateAccount from "../../components/Admin/ManageAccount/CreateAccount.vue";
import { mapGetters } from "vuex";

export default {
    name: "AdminManage",
    components: { TitleStructure, EditInforAccount, CreateAccount },

    data() {
        return {
            accountStudent: [],
            accountTeacher: [],
            accountCompany: [],
            accounts: [],
            accountUpdate: {},
        };
    },
    computed: mapGetters({ accountCurrent: "getAccountCurrent" }),
    mounted() {
        document.querySelectorAll(".type__item")[0].classList.add("active");

        const typeItems = document.querySelectorAll(".type__item");

        [...typeItems].forEach(function (typeItem) {
            typeItem.addEventListener("click", handleBorderItem);
        });

        function handleBorderItem(event) {
            [...typeItems].forEach((typeItem) => {
                typeItem.classList.remove("active");
            });
            event.target.classList.add("active");
        }
    },
    async created() {
        const token = localStorage.getItem("token");
        const response = await axios.get(
            `${config.domain}/admin/get-all-account`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );

        this.accounts = response.data.result;

        this.$store.commit("SET_ACCOUNT_CURRENT", response.data.result);
    },
    methods: {
        handleFilter(event) {
            const filter = event.target.id;
            if (filter == "teacher") {
                this.$store.commit(
                    "SET_ACCOUNT_CURRENT",
                    this.accounts.filter((account) => account.rule == "TEACHER")
                );
            } else if (filter == "student") {
                this.$store.commit(
                    "SET_ACCOUNT_CURRENT",
                    this.accounts.filter((account) => account.rule == "STUDENT")
                );
            } else if (filter == "company") {
                this.$store.commit(
                    "SET_ACCOUNT_CURRENT",
                    this.accounts.filter((account) => account.rule == "COMPANY")
                );
            } else if (filter == "all") {
                this.$store.commit("SET_ACCOUNT_CURRENT", this.accounts);
            }
        },
        async handleDeleteAccount(accountId) {
            const token = localStorage.getItem("token");
            const res = await axios.delete(
                `${config.domain}/admin/delete-account`,
                {
                    headers: { Authorization: "Bearer " + token },

                    data: {
                        accountId,
                    },
                }
            );

            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

            if (res.data.status) {
                this.$store.commit("DELETE_ACCOUNT_CURRENT", accountId);
            }
        },

        handleSetUpdate(account) {
            this.$store.commit("SET_ACCOUNT_UPDATE", account);
        },
    },
};
</script>

<style scoped>
.type__item {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 2px solid rgba(64, 68, 162, 0.25);
}

.type__item.active {
    transition: border-bottom 0.5s linear;
    border-bottom-color: #2f2fe6;
}

.my-custom-scrollbar {
    position: relative;
    height: 400px;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: block;
}
</style>
