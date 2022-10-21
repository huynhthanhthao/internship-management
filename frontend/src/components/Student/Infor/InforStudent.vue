<template>
    <div class="infor-student start-0 p-0">
        <a
            class="btn btn-primary btn-infor position-fixed top-50"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
        >
            <i class="bi bi-info-circle-fill"></i>
        </a>

        <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
        >
            <div class="offcanvas-header text-white">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                    Thông tin cá nhân
                </h5>
                <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>

            <div class="offcanvas-body mt-5">
                <div
                    class="infor-student-header d-flex flex-column align-items-center"
                >
                    <Avatar :avatar="avatar" />
                    <h3 class="infor-student-name mt-3">
                        {{ information.name }}
                    </h3>
                </div>

                <ul class="infor-student-detail fs-6 mt-5 ps-0">
                    <li class="infor-student-item mb-2">
                        <span class="item__title me-3">
                            <i class="bi bi-person-circle"></i>
                        </span>
                        <span class="item__value">B1906758</span>
                    </li>
                    <li class="infor-student-item mb-2">
                        <span class="item__title me-3">
                            <i class="bi bi-envelope-fill"></i>
                        </span>
                        <span class="item__value"
                            >tanb1906758@student.ctu.edu.vn</span
                        >
                    </li>
                    <li class="infor-student-item mb-2">
                        <span class="item__title me-3">
                            <i class="bi bi-phone-fill"></i>
                        </span>
                        <span class="item__value">0939382623</span>
                    </li>
                </ul>

                <button
                    class="btn btn-primary rounded-pill mt-5 d-flex m-auto"
                    data-bs-dismiss="offcanvas"
                >
                    <router-link
                        to="/student/update-infor"
                        style="text-decoration: none; color: inherit"
                    >
                        <i class="bi bi-pencil-square"></i> &nbsp; Cập nhật
                        thông tin
                    </router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Avatar from "../../GlobalComponent/AvatarComponent.vue";

export default {
    name: "InforStudent",
    data() {
        return {
            avatar: {
                path: "https://cdn-icons-png.flaticon.com/512/3429/3429440.png",
                width: 200,
                height: 200,
            },
        };
    },
    components: { Avatar },
    computed: mapGetters({ information: "getInformation" }),
};
</script>

<style>
.btn-infor {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    left: -10px;
}
.offcanvas-header {
    background-color: #1f5caa;
}

.infor-student-detail {
    list-style-type: none;
}
</style>
