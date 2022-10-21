<template>
  <div class="teacher-manage" >
    <div class="students-register row p-4 animate__fadeIn animate__animated">
      <div class="col-12">
        <div class="d-flex">
          <div class="col-6">
            <h2 class="header-list label m-0 p-2 pt-4 fw-bold" style="color: #555555">
              Danh sách sinh viên
            </h2>
            <div class="line my-3"></div>
          </div>
          <div class="col-6">
            <h2 class="header-detail label m-0 p-2 pt-4 fw-bold" style="color: #555555">
              Tổng quan
            </h2>
            <div class="line my-3"></div>
          </div>
        </div>
      </div>
      <div class="teacher-student__list col-6">
        <ObjectItem :infor="infor" :itemId="`1`" :layout="layout">
          <div class="col-12 d-flex justify-content-center mt-4">
            <button type="button" class="btn btn-outline-secondary p-2" style="font-size: 15px" @click="showDetail()">
              Xem chi tiết
            </button>
          </div>
        </ObjectItem>
      </div>
      <div class="col-6">
        <Overview/>
        <DetailStudent/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ObjectItem from '@/components/GlobalComponent/ObjectItem.vue';
import Overview from '@/components/Teacher/Manage/Overview.vue';
import DetailStudent from '@/components/Teacher/Manage/DetailStudent.vue';
export default {
  name: "TeacherManage",
  components: { Overview, DetailStudent, ObjectItem },
  data() {
    return {
      layout:{
        nameField: "Họ và tên",
        optionField: "Đơn vị",
      },
      infor: {
        avatar: "https://cdn-icons-png.flaticon.com/512/2436/2436683.png"
        name: "Huỳnh Thanh Thảo",
        email: "thaohoiden@gmail.com",
        phone: "09090989",
        option: "Tập đoàn viễn thông quân đội"
      }
    }
  },
  mounted(){
    this.showAssess();
  },
  methods: {
    ...mapMutations({
      showAssess: "SHOW_ASSESS", 
      showDetailStudent: "SHOW_DETAIL_STUDENT",
      closeOverview: "CLOSE_OVERVIEW_TEACHER",
    }),

    showDetail(){
      const headerDetail = document.querySelector(".header-detail");
      headerDetail.innerText = "Thông tin chi tiết";
      this.showDetailStudent();
      this.closeOverview();
    }
  }
}
</script>

<style>
  .teacher-student__list{
    height: 450px;
    overflow-y: scroll;
  }
</style>