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
            <div class="col-6" style="height: 500px; overflow-y: scroll">
                <div class="accordion">
                    <CompanyItem
                        class="mb-2 me-2"
                        v-for="(company, index) in companyList"
                        :key="index"
                        :company="company"
                        :index="index"
                    />
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
import axios from "axios";
import config from "@/config/index.js";

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
    computed: mapGetters({
        isShowDetail: "getShowDetail",
        companyList: "getCompanyList",
    }),

    async created() {
        try {
            // Dong xem chi tiet
            this.$store.commit("CLOSE_DETAIL");

            // Load du lieu
            const token = localStorage.getItem("token");
            const res = await axios.get(
                `${config.domain}/ministry/get-all-companies`,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            this.$store.commit("SET_COMPANY_LIST", res.data.result);
        } catch (error) {
            console.log(error);
        }
    },
};
</script>

<style></style>
