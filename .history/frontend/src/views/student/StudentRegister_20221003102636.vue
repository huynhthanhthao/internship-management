<template>
    <div class="student-manage">
      <div class="row animate__fadeIn animate__animated">
        <ViewListStructure :listTitle="`Danh sách đơn vị thực tập`"/>
        <div class="company__list col-6">
          <ObjectItem :infor="infor" :itemId="`1`" :layout="layout">
            <div class="col-12 d-flex justify-content-center mt-4">
              <button type="button" class="btn btn-outline-secondary p-2" style="font-size: 15px" @click="showDetail()">
                Xem chi tiết
              </button>
            </div>
          </ObjectItem>
        </div>
        <div class="col-6">

        </div>
      </div>
    </div>
</template>

<script>
import ViewListStructure from '@/components/GlobalComponent/ViewListStructure.vue';
import ObjectItem from '@/components/GlobalComponent/ObjectItem.vue';
export default {
    name: "StudentRegister",
    components: { ViewListStructure, ObjectItem },
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

    }
}
</script>

<style>

</style>