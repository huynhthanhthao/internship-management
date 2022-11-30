<template>
    <div class="animate__animated animate__fadeIn">
        <Header />
        <div
            class="login py-5 col-sm-8 m-auto d-flex flex-column align-items-center"
        >
            <h2 class="login__title fs-2 fw-semibold" style="color: #555">
                Chào mừng đến với
                <span style="color: #1f5cca">CTU&nbsp;</span>
                <span style="color: #00b0f0">M-INTERNSHIP</span> !
            </h2>
            <form
                class="login__form col-sm-6 mt-5 p-5 rounded-2"
                @submit="login"
            >
                <div class="mb-3">
                    <label for="login__name" class="form-label"
                        >Tên đăng nhập</label
                    >
                    <input
                        v-model="username"
                        type="text"
                        class="form-control"
                        id="login__name"
                    />
                </div>
                <div class="mb-3">
                    <label for="InputPassword" class="form-label"
                        >Mật khẩu</label
                    >
                    <input
                        type="password"
                        class="form-control"
                        id="InputPassword"
                        v-model="password"
                    />
                </div>
                <div class="mb-3 form-check">
                    <div class="form__footer d-flex">
                        <div class="form__footer-remember flex-grow-1">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="remember"
                            />
                            <label class="form-check-label" for="remember"
                                >Nhớ tôi</label
                            >
                        </div>
                        <div class="form__footer-forgot">
                            <a href="#" class="forgot__link">Quên mật khẩu</a>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    class="btn btn-primary d-flex m-auto mt-5"
                >
                    Đăng nhập
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import { mapActions } from "vuex";
export default {
    name: "LoginComponent",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    components: { Header },
    methods: {
        ...mapActions({
            getLogin: "login",
        }),
        login(event) {
            event.preventDefault();

            // handle login
            this.getLogin({
                username: this.username,
                password: this.password,
            });
        },
    },
};
</script>

<style>
.login__form {
    box-shadow: #b3b3b362 0px 2px 8px 0px;
}
.forgot__link {
    text-decoration: none;
}
</style>
