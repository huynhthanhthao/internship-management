<template>
  <div class="teacher-manage p-4" >
      <ViewListStructure :title="title"/>
      <div class="teacher-manage__content row">
        <div class="teacher-student-list col-6">
          <div class="teacher-student-class">
            <button type="button" class="btn btn-primary col-2">DI1996A1</button>
            <button type="button" class="btn btn-primary col-2">DI1996A2</button>
            <button type="button" class="btn btn-primary col-2">DI1996A3</button>
          </div>
          <div class="teacher-student-item">
            <ObjectItem :infor="infor" :itemId="`1`" :layout="layout">
              <div class="col-12 d-flex justify-content-center mt-4">
                <button type="button" class="btn btn-outline-secondary p-2" style="font-size: 15px" @click="showDetail">
                  Xem chi tiết
                </button>
              </div>
            </ObjectItem>
          </div>
          
        </div>
        <div class="view-detail col-6 flex-grow-1">
          <Overview />
          <DetailStudent />
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ObjectItem from '@/components/GlobalComponent/ObjectItem.vue';
import Overview from '@/components/Teacher/Manage/Overview.vue';
import DetailStudent from '@/components/Teacher/Manage/DetailStudent.vue';
import ViewListStructure from '@/components/GlobalComponent/ViewListStructure.vue';

export default {
  name: "TeacherManage",
  components: { Overview, DetailStudent, ObjectItem, ViewListStructure },
  data() {
    return {
      title: {
        headerList: "Danh sách sinh viên",
        headerDetail: "Tổng quan",
      },
      layout:{
        identify: "MSSV",
        "unit-address": "Đơn vị thực tập",
      },
      infor: {
        avatar: "https://cdn-icons-png.flaticon.com/512/2436/2436683.png",
        name: "Huỳnh Thanh Thảo",
        identify: "B1906758",
        "unit-address": "Tập đoàn viễn thông quân đội Viettel"
      }
    }
  },
  // Close detailStudent when the all of accordions are not show.
  mounted(){
    const accordionShow = document.querySelector(".accordion-collapse.show");
    if (!accordionShow) {
      this.closeDetail();
    }
  },
  methods: {
    ...mapMutations({ 
      showDetailStudent: "SHOW_DETAIL_STUDENT",
      closeDetailStudent: "CLOSE_DETAIL_STUDENT"
    }),

    showDetail(){
      const headerDetail = document.querySelector(".header-detail");
      headerDetail.innerText = "Thông tin chi tiết";
      this.showDetailStudent();
    },

    closeDetail(){
      const headerDetail = document.querySelector(".header-detail");
      headerDetail.innerText = "Tổng quan";
      this.closeDetailStudent();
    }
  }
}
</script>

<style scoped>
  .teacher-student-item{
    height: 420px;
    overflow-y: scroll;
  }
  
  .view-detail{
    width: 49%;
  }
</style>