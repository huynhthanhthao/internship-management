<template>
  <div class="teacher-manage p-4" >
      <div class="col-12 d-flex">
        <TitleStructure :title="`Danh sách sinh viên`" class="col-6 me-4"></TitleStructure>
        <TitleStructure :title="`Tổng quan`" class="col-6 title-detail"></TitleStructure>
      </div>
      <div class="teacher-manage__content row">
        <div class="teacher-student-list col-6">
          <div class="teacher-student-class">
            <ClassList class="col-12"></ClassList>
          </div>
          <div class="teacher-student-item">
            <ObjectItem :infor="infor" :itemId="`1`" :layout="layout" class="me-3">
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
          <DetailStudent class="mt-5"></DetailStudent>
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ObjectItem from '@/components/GlobalComponent/ObjectItem.vue';
import Overview from '@/components/Teacher/Manage/Overview.vue';
import DetailStudent from '@/components/Teacher/Manage/DetailStudent.vue';
import ClassList from '@/components/Teacher/Manage/ClassList.vue';
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';

export default {
  name: "TeacherManage",
  components: { Overview, DetailStudent, ObjectItem, ClassList, TitleStructure },
  data() {
    return {
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
      const headerDetail = document.querySelector(".title-detail .label");
      headerDetail.innerText = "Thông tin chi tiết";
      this.showDetailStudent();
    },

    closeDetail(){
      const headerDetail = document.querySelector(".title-detail .label");
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