<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-if="!isLogin">
                        <router-link
                            class="nav-link active"
                            aria-current="page"
                            to="/login"
                            >Đăng nhập</router-link
                        >
                    </li>
                    <li
                        v-for="router in routers"
                        v-else
                        class="nav-item"
                        :key="router.path"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item py-1">
                                <router-link
                                    class="text-decoration-none me-3 text-white"
                                    aria-current="page"
                                    :to="router.path"
                                    >{{ router.name }}</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
import config from "../../config/index";
export default {
    name: "NavbarComponent",
    data() {
        return {
            rule: "",
        };
    },
    computed: {
        ...mapGetters({
            isLogin: "getIsLogin",
            getRouters: "getRouters",
        }),
        ...mapMutations({ login: "LOGIN" }),
        routers() {
            if (this.rule == "COMPANY") {
                return this.getRouters.companyRoutes;
            } else if (this.rule == "TEACHER") {
                return this.getRouters.teacherRoutes;
            } else if (this.rule == "MINISTRY") {
                return this.getRouters.ministryRoutes;
            } else if (this.rule == "ADMIN") {
                return this.getRouters.adminRoutes;
            } else if (this.rule == "STUDENT") {
                return this.getRouters.studentRoutes;
            }
            return "";
        },
    },
    async created() {
        const token = localStorage.getItem("token");

        const res = await axios.post(
            `${config.domain}/get-rule`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const rule = res.data.rule;
        this.rule = rule;
        if (rule) {
            this.login;
        }
    },
};
</script>

<style scoped>
.navbar {
    background-color: #3a454b !important;
}

.active-link {
    color: #00b0f0 !important;
}
</style>
