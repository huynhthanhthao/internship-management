<template>
    <div class="student-register p-4">
        <div class="row animate__fadeIn animate__animated">
            <div class="col-12 d-flex">
                <TitleStructure
                    :title="`Danh sách đơn vị thực tập`"
                    class="col-6 me-4"
                ></TitleStructure>
                <TitleStructure
                    :title="`Tổng quan`"
                    class="col-6 title-detail"
                ></TitleStructure>
            </div>
            <div class="company__list col-6 me-2">
                <CompanyItem
                    v-for="(company, index) in companyList"
                    :key="index"
                    :index="index"
                    :company="company"
                ></CompanyItem>
            </div>
            <div class="col-6 p-0">
                <DetailCompany />
                <Overview />
            </div>
        </div>
        <SendRegister />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CompanyItem from "../../components/Student/RegisterCompany/CompanyItem.vue";
import DetailCompany from "@/components/Student/RegisterCompany/DetailCompany.vue";
import SendRegister from "@/components/Student/RegisterCompany/SendRegister.vue";
import Overview from "@/components/Student/RegisterCompany/Overview.vue";
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue";

export default {
    name: "StudentRegister",

    components: {
        CompanyItem,
        DetailCompany,
        SendRegister,
        Overview,
        TitleStructure,
    },

    computed: {
        ...mapGetters({ companyList: "getCompanyList", account: "getAccount" }),
    },

    async created() {
        await this.$store.dispatch("setAccount");
        const rule = localStorage.getItem("rule").toLowerCase();

        //Student va Teacher deu dung chung Store voi cac action, action goi api oi duong dan khac nha.
        //Dung rule de truyen vao duong dan cho tung doi tuong goi toi api do.
        const payload = { id: this.account.id, rule };

        await this.$store.dispatch("setCompanyList");
        await this.$store.dispatch("setStudentInfor", payload);
        await this.$store.dispatch("setCompanyInfor", payload);
    },

    //Close detail company when all of accordions are not shown
    mounted() {
        const accordionShow = document.querySelector(
            ".accordion-collapse.show"
        );
        if (!accordionShow) {
            this.closeDetail();
        }
    },
    methods: {
        showDetail() {
            const headerDetail = document.querySelector(".title-detail .label");
            headerDetail.innerText = "Thông tin chi tiết";
            this.$store.commit("SHOW_COMPANY");
        },

        closeDetail() {
            const headerDetail = document.querySelector(".title-detail .label");
            headerDetail.innerText = "Tổng quan";
            this.$store.commit("CLOSE_COMPANY");
        },
    },
};
</script>

<style scoped>
.company__list {
    width: 49%;
    height: 400px;
    overflow-y: scroll;
}
</style>
