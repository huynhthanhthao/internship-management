<template>
<div class="detail-student" v-if="detail">
    <div class="detail__infor position-relative border rounded-2 p-3 row animate__fadeIn animate__animated m-0" >
        <button
            type="button"
            class="btn-close position-absolute"
            aria-label="Close"
            @click="closeDetail"
        >
        </button>
        <AvatarComponent :avatar="{path: studentActive.urlAvatar, height: 150, width: 150}" class="col-5 me-3"/>
        <div class="col-7 flex-grow-1">
            <div class="col-12 mb-3"><strong>MSSV: </strong> {{studentActive.username}}</div>
            <div class="col-12 mb-3">
                <strong>Họ và tên: </strong> {{studentActive.name}}
            </div>
            <div class="col-12 mb-3">
                <strong>Email: </strong> {{studentActive.email}}
            </div>
            <div class="col-12 mb-3">
                <strong>Đơn vị thực tập: </strong> {{studentActive.companyName}}
            </div>
        </div>
        <div class="col-12 d-flex justify-content-around mt-3">
            <router-link :to="'/teacher/view/progress/'+ studentActive.id">
                <button type="button" class="btn btn-primary" >
                Xem thông tin thực tập
                </button>
            </router-link >
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarComponent from "@/components/GlobalComponent/AvatarComponent.vue";
export default {
    name: "DetailStudent",
    data(){
        return{
            avatar:{
                path: "https://cdn-icons-png.flaticon.com/512/2302/2302834.png",
                height: 150,
                width: 150
            }
        }
    },
    computed: {
        ...mapGetters({
            detail: "getDetailStudent", 
            studentActive: "getStudentActive"
        }
        ),
    },

    methods: {
        closeDetail() {
            const headerDetail = document.querySelector(".title-detail .label");
            headerDetail.innerText = "Tổng quan";
            this.$store.commit("CLOSE_DETAIL_STUDENT")
        }
    },
    components: { AvatarComponent },
  
}
</script>

<style scoped>

.btn-close {
    top: 10px;
    right: 10px;
}
</style>
