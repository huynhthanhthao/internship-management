<template>
    <div>
        <div
            class="students-register row p-4 animate__fadeIn animate__animated"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Sinh viên đăng ký
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
            <div class="col-6">
                <RegisterList />
            </div>
            <div class="col-6">
                <InformationDetail v-if="isShowDetail" />
                <Statistics v-else />
            </div>
        </div>
        <Modal />
    </div>
</template>

<script>
import RegisterList from "../../components/StudentsRegister/RegisterList.vue";
import InformationDetail from "../../components/StudentsRegister/InformationDetail.vue";
import Statistics from "../../components/StudentsRegister/Statistics.vue";

import { mapGetters } from "vuex";
export default {
    name: "StudentsRegister",
    components: { RegisterList, InformationDetail, Statistics },
    computed: mapGetters({ isShowDetail: "getShowDetailRegister" }),
};
</script>

<style>
.line {
    border-bottom: 3px solid #1c57a5;
    width: 100px;
}
</style>
