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
        <StudentList/>
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
import StudentList from '@/components/Teacher/Manage/StudentList.vue';
import Overview from '@/components/Teacher/Manage/Overview.vue';
import DetailStudent from '@/components/Teacher/Manage/DetailStudent.vue';
export default {
  name: "TeacherManage",
  components: {StudentList, Overview, DetailStudent },
  methods: {
    ...mapMutations({ getUpdateTeacher: "getUpdateTeacher" })
  }
}
</script>

<style>
  .teacher-student__list{
    height: 450px;
    overflow-y: scroll;
  }
</style>