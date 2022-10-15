<template>
    <div>
        <div
            class="students-register row p-4 animate__fadeIn animate__animated position-relative"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Danh sách giảng viên
                        <div class="line my-3"></div>
                    </h2>
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Thông tin chi tiết
                        <div class="line my-3"></div>
                    </h2>
                </div>
            </div>
            <div
                class="accordion col-6"
                style="height: 500px; overflow-y: scroll"
            >
                <TeacherItem class="mb-2" />
            </div>
            <div class="col-6">
                <TeacherDetail v-if="isShowDetail">
                    <div class="col-12 d-flex justify-content-around mt-3">
                        <button
                            type="button"
                            class="btn-close position-absolute"
                            aria-label="Close"
                            @click="closeDetail"
                        ></button>
                        <router-link
                            to="/ministry/teacher-management/students"
                            type="button"
                            class="btn btn-outline-secondary d-flex align-items-center p-2"
                        >
                            Xem danh sách sinh viên đang quản lý
                        </router-link>
                    </div>
                </TeacherDetail>
                <Statistics v-else />
            </div>
        </div>
    </div>
</template>

<script>
import TeacherItem from "../../components/Ministry/TeacherManagement/TeacherItem.vue";
import TeacherDetail from "../../components/Ministry/TeacherManagement/TeacherDetail.vue";
import Statistics from "../../components/Ministry/TeacherManagement/Statistics.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "TeacherManagement",
    components: { TeacherItem, TeacherDetail, Statistics },
    computed: mapGetters({ isShowDetail: "getShowDetailRegister" }),
    methods: {
        ...mapMutations({
            closeDetail: "CLOSE_DETAIL_REGISTER",
        }),
    },
};
</script>

<style>
.btn-close {
    top: 10px;
    right: 10px;
}

.complete {
    width: 20%;
}
</style>
