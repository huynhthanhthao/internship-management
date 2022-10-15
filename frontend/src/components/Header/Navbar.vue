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
import { mapGetters } from "vuex";

export default {
    name: "NavbarComponent",
    props: ["rule"],
    computed: {
        ...mapGetters({
            isLogin: "getIsLogin",
            getRouters: "getRouters",
        }),
        routers() {
            if (this.rule == "company") {
                return this.getRouters.companyRoutes;
            } else if (this.rule == "teacher") {
                return this.getRouters.teacherRoutes;
            } else if (this.rule == "ministry") {
                return this.getRouters.ministryRoutes;
            } else if (this.rule == "admin") {
                return this.getRouters.adminRoutes;
            } else {
                return this.getRouters.studentRoutes;
            }
        },
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
