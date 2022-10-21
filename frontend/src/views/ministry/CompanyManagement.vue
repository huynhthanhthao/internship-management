<template>
    <div>
        <div
            class="company-management row p-4 animate__fadeIn animate__animated position-relative"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Danh sách các đơn vị
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
                <div
                    class="accordion"
                    style="height: 500px; overflow-y: scroll"
                >
                    <CompanyItem class="mb-2 me-2" />
                </div>
            </div>

            <div class="col-6">
                <CompanyDetail v-if="isShowDetail" />
                <Statistics v-else />
            </div>
        </div>
    </div>
</template>

<script>
import CompanyItem from "../../components/Ministry/CompanyManagement/CompanyItem.vue";
import CompanyDetail from "../../components/Ministry/CompanyManagement/CompanyDetail.vue";
import Statistics from "../../components/Ministry/CompanyManagement/Statistics.vue";

import { mapGetters } from "vuex";
export default {
    name: "CompanyManagement",
    components: {
        CompanyDetail,
        CompanyItem,
        Statistics,
    },
    computed: mapGetters({ isShowDetail: "getShowDetailRegister" }),
};
</script>

<style></style>
