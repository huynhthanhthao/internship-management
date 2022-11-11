<template>
    <div class="detail-company" v-if="showCompany">
        <div
            class="detail__infor row position-relative border rounded-2 p-3 mx-2 animate__fadeIn animate__animated">
            <button type="button" class="btn-close position-absolute" aria-label="Close" @click="closeDetail">
            </button>
            <AvatarComponent :avatar="{path: company.urlAvatar, width: 150, height: 150}" class="col-5 pe-0"/>
            <div class="col-8 ms-3">
                <div class="col-12 mt-0 mb-3"><strong>Đơn vị: </strong>{{company.name}}</div>
                <div class="col-12 my-3">
                    <strong>Email: </strong> {{company.email}}
                </div>
                <div class="col-12 my-3">
                    <strong>Số điện thoại: </strong> {{company.phoneNumber}}
                </div>
                <div class="col-12 my-3">
                    <strong>Địa chỉ: </strong>  {{company.address}}
                </div>
            </div>
            <div class="col-12 my-1 p-0">
                <strong>Về đơn vị: </strong> {{company.message}}
            </div>
            <div class="col-12 d-flex justify-content-around pt-2">
                <span v-if="company.id === student.companyId>ok</span>
                <button type="button" class="btn btn-warning" v-else-if="student.companyId!==null" disabled>
                    Sinh viên đang thực tập tại đơn vị khác
                </button>
                <button v-else type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#sendRegister">
                    <i class="bi bi-vector-pen"></i> &nbsp; Đăng ký
                </button>
                
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters } from "vuex";
import AvatarComponent from "@/components/GlobalComponent/AvatarComponent.vue";
export default {
    name: "DetailCompany",
    components: { AvatarComponent },
    computed: {
        ...mapGetters({ 
            showCompany: "getShowCompany", 
            company: "getCompanyDetail", 
            student: "getStudentInfor" 
        }),
    },
    methods: {
        closeDetail() {
            const headerDetail = document.querySelector(".title-detail h2");
            headerDetail.innerText = "Tổng quan";
            this.$store.commit("CLOSE_COMPANY")
        }
    },
    
}
</script>

<style scoped>
    .detail__infor {
        min-height: 300px;
    }

    .btn-close {
        top: 10px;
        right: 10px;
    }
</style>
