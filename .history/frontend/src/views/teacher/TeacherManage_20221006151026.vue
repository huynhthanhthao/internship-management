<template>
  <div class="teacher-manage px-3" >
      <ViewListStructure :title="title"/>
      <div class="teacher-manage__content row">
        <div class="teacher-student__list col-6">
          <ObjectItem :infor="infor" :itemId="`1`" :layout="layout">
            <div class="col-12 d-flex justify-content-center mt-4">
              <button type="button" class="btn btn-outline-secondary p-2" style="font-size: 15px" @click="showDetail">
                Xem chi tiết
              </button>
            </div>
          </ObjectItem>
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
        nameField: "Họ và tên",
        optionField: "Đơn vị",
      },
      infor: {
        avatar: "https://cdn-icons-png.flaticon.com/512/2436/2436683.png",
        name: "Huỳnh Thanh Thảo",
        email: "thaohoiden@gmail.com",
        phone: "09090989",
        option: "Tập đoàn viễn thông quân đội"
      }
    }
  },
  mounted(){
    const accordionShow = document.querySelector(".accordion-collapse.show");
    if (!accordionShow) {
      this.closeDetail();
    }
    this.showAssess();
  },
  methods: {
    ...mapMutations({
      showAssess: "SHOW_ASSESS", 
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

<style>
  .teacher-student__list{
    height: 420px;
    overflow-y: scroll;
  }
  
  .view-detail{
    width: 49%;
  }
</style>