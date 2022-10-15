<template>
    <div class="student-manage">
      <div class="row animate__fadeIn animate__animated">
        <ViewListStructure :listTitle="`Danh sách đơn vị thực tập`"/>
        <div class="company__list col-6">
          <ObjectItem :infor="infor" :itemId="`1`" :layout="layout">
            <div class="col-12 d-flex justify-content-center mt-4">
              <button type="button" class="btn btn-outline-secondary p-2" style="font-size: 15px" @click="showDetailCompany">
                Xem chi tiết
              </button>
            </div>
          </ObjectItem>
        </div>
        <div class="col-6">
          <DetailCompany/>
        </div>
      </div>
    </div>
</template>

<script>
import ViewListStructure from '@/components/GlobalComponent/ViewListStructure.vue';
import ObjectItem from '@/components/GlobalComponent/ObjectItem.vue';
import { mapMutations } from 'vuex';
import DetailCompany from '@/components/Student/Company/DetailCompany.vue';
export default {
    name: "StudentRegister",
    components: { ViewListStructure, ObjectItem, DetailCompany },
    data(){
      return {
        layout: {
          nameField: "Đơn vị",
          optionField: "Địa chỉ"
        },
        infor:{
          name: "Tập đoàn viễn thông quân đội Viettel",
          email: "contacts@viettel.com.vn",
          phone: "09090989",
          option: "Thanh Xuan, Ha Noi"
        }
      }
    },
    methods:{
      ...mapMutations({showDetailCompany: "SHOW_DETAIL_COMPANY"})
    }
}
</script>

<style>

</style>