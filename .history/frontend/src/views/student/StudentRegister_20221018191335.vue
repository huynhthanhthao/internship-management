<template>
    <div class="student-register p-4">
      <div class="row animate__fadeIn animate__animated">
        <div class="col-12 d-flex">
          <TitleStructure :title="`Danh sách đơn vị thực tập`" class="col-6 me-4"></TitleStructure>
          <TitleStructure :title="`Tổng quan`" class="col-6 title-detail"></TitleStructure>
        </div>
        <div class="company__list col-6 me-2">
          <ObjectItem :infor="infor" :itemId="`1`" :layout="layout">
            <div class="col-12 d-flex justify-content-center mt-4">
              <button type="button" class="btn btn-outline-secondary p-2" style="font-size: 15px" @click="showDetailCompany">
                Xem chi tiết
              </button>
            </div>
          </ObjectItem>
        </div>
        <div class="col-6 p-0">
          <DetailCompany/>
          <Overview />
        </div>
      </div>
      <SendRegister/>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ObjectItem from '@/components/GlobalComponent/ObjectItem.vue';
import DetailCompany from '@/components/Student/RegisterCompany/DetailCompany.vue';
import SendRegister from '@/components/Student/RegisterCompany/SendRegister.vue';
import Overview from '@/components/Student/RegisterCompany/Overview.vue';
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';

export default {
    name: "StudentRegister",
    components: {ObjectItem, DetailCompany, SendRegister, Overview, TitleStructure },
    data(){
      return {
        layout: {
          identify: "Email",
          "unit-address":"Địa chỉ"
        },
        infor:{
          name: "Tập đoàn viễn thông quân đội Viettel",
          avatar: "https://brademar.com/wp-content/uploads/2022/09/Viettel-Logo-PNG-1.png",
          identify: "contacts@viettel.com.vn",
          "unit-address": "Láng Hạ, Thanh Xuân, Hà Nội"
        }
      }
    },

    //Close detail company when all of accordions are not shown
    mounted(){
      // const accordionShow = document.querySelector(".accordion-collapse.show");
      if(this.showDetail){
        const headerDetail = document.querySelector(".title-detail.label");
        headerDetail.innerText = "Thông tin chi tiết";
        console.log("Show");
      }
      if (!this.showDetail){
        const headerDetail = document.querySelector(".title-detail.label");
        headerDetail.innerText = "Tổng quan";
        console.log("Close");
      }
    },
    computed:{
      ...mapGetters({
        showDetail: "getDetailDetail"
      })
    },
    methods:{
      ...mapMutations({
        showDetailCompany: "SHOW_DETAIL_COMPANY",
        closeDetailCompany: "CLOSE_DETAIL_COMPANY"
      }),
    }
}
</script>

<style scoped>
  .company__list{
    width: 49%;
    height: 400px;
    overflow-y: scroll;
  }

</style>