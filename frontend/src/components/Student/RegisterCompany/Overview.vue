<template>
    <div class="statistics d-flex flex-column text-center mt-5 animate__fadeIn animate__animated" v-if="!showCompany">
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1376/1376203.png" alt="" style="width: 200px" />
        </div>
        <div class="mt-3">Hiện đang có {{companyList.length}} đơn vị thực tập.</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "OverviewComponent",
    computed: {
        ...mapGetters({ 
            showCompany: "getShowCompany", 
            companyList: "getCompanyList" 
        }),
    },
}
</script>

<style>

</style>