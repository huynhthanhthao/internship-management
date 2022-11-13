<template>
    <div class="student-update my-5 animate__animated animate__fadeIn">
        <h2 class="update__title text-center fw-bold" style="color: #555555">
            Cập nhật thông tin cá nhân
        </h2>

        <div class="form-update row col-6 mt-5 p-4 rounded-3 m-auto">
            <div class="col-4 text-center">
                <AvatarComponent
                    class="mt-5 mb-3"
                    :urlAvatar="account.urlAvatar"
                />
                <h5 class="fw-bold">{{ account.name }}</h5>
                <h5 class="fw-bold">{{ account.username }}</h5>
            </div>
            <form
                class="form-update-infor ms-5 col-6"
                enctype="multipart/form-data"
                method="post"
                @submit="updateProfile"
            >
                <input
                    class="form-control d-none"
                    name="accountId"
                    v-model="account.id"
                />
                <input
                    class="form-control d-none"
                    name="urlAvatar"
                    v-model="account.urlAvatar"
                />
                <div class="mb-4">
                    <label for="email" class="form-label py-1"
                        ><strong>Email</strong></label
                    >
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        name="email"
                        v-model="account.email"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label for="phone" class="form-label py-1"
                        ><strong>Số điện thoại</strong></label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="phone"
                        aria-describedby="name"
                        name="phoneNumber"
                        v-model="account.phoneNumber"
                        required
                    />
                </div>

                <div class="mb-4 d-flex align-items-center">
                    <input
                        v-model="changePwd"
                        type="checkbox"
                        style="width: 18px; height: 18px"
                    />
                    <span class="ms-2">Thay đổi mật khẩu</span>
                </div>
                <div class="mb-4" v-if="changePwd">
                    <label for="phone" class="form-label py-1"
                        ><strong>Mật khẩu hiện tại</strong></label
                    >
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        aria-describedby="name"
                        name="password"
                        v-model="password"
                        required
                    />
                </div>
                <div class="mb-4" v-if="changePwd">
                    <label for="phone" class="form-label py-1"
                        ><strong>Mật khẩu mới</strong></label
                    >
                    <input
                        type="password"
                        class="form-control"
                        id="newPassword"
                        aria-describedby="name"
                        name="newPassword"
                        v-model="newPassword"
                        required
                    />
                </div>

                <div class="mb-4">
                    <label class="form-label py-1"
                        ><strong>Cập nhật ảnh đại diện</strong></label
                    >
                    <label
                        type="button"
                        class="btn btn-outline-secondary col-12"
                        for="avatar"
                    >
                        <i class="bi bi-cloud-arrow-up-fill"></i>
                        Tải ảnh lên
                    </label>
                    <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        accept="image/png, image/jpeg"
                        @change="setNameFile"
                        class="d-none"
                    />
                    <div
                        class="col-12 my-2"
                        style="text-overflow: ellipsis; overflow: hidden"
                    >
                        {{ fileName }}
                    </div>
                </div>
                <div class="form__footer d-flex justify-content-around mt-4">
                    <button class="btn btn-danger" @click="handleReset">
                        <i class="bi bi-arrow-clockwise"></i>&nbsp;Đặt lại
                    </button>
                    <button type="submit" class="btn btn-primary btn-save">
                        <i class="bi bi-calendar4"></i>&nbsp; Lưu
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import config from "@/config/index.js";
import { mapGetters } from "vuex";
import AvatarComponent from "../components/GlobalComponent/AvatarComponent.vue";

export default {
    name: "StudentInfor",
    components: { AvatarComponent },
    data() {
        return {
            changePwd: false,
            newPassword: "",
            password: "",
            fileName: "",
        };
    },
    computed: {
        ...mapGetters({ account: "getAccount" }),
    },
    async created() {
        await this.$store.dispatch("setAccount");

        if (this.$route.params.status == "not-update") {
            this.$store.commit("SET_TOAST", {
                message: "Mật khẩu hiện tại không chính xác!",
                isSuccess: false,
            });
        } else if (this.$route.params.status == "success") {
            this.$store.commit("SET_TOAST", {
                message: "Cập nhật thành công!",
                isSuccess: true,
            });
        }
    },
    mounted() {
        const nav = document.querySelector("nav");
        nav.scrollIntoView();
    },
    methods: {
        async updateProfile(e) {
            try {
                e.target.action = `${config.domain}/update-profile`;
            } catch (error) {
                console.log(error);
            }
        },
        handleReset() {
            this.account.email = "";
            this.account.phoneNumber = "";
            this.newPassword = "";
            this.password = "";
        },
        setNameFile(e) {
            this.fileName = e.target.value.split("\\")[2];
        },
    },
};
</script>

<style scoped>
.btn-save {
    min-width: 70px;
}

.form-update {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
