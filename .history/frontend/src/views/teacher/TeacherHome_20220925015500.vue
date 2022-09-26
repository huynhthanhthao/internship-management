<template>
  <div class="teacher-home" >
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
            <h2 class="header-list label m-0 p-2 pt-4 fw-bold" style="color: #555555">
              Tổng quan

            </h2>
            <div class="line my-3"></div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <TeacherStudentList />
      </div>
      <div class="col-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherStudentList from '@/components/Teacher/TeacherStudentList.vue';
import { mapMutations } from 'vuex';
import TeacherOverview from '@/components/Teacher/TeacherOverview.vue';
export default {
  name: "TeacherManage",
  components: { TeacherStudentList, TeacherOverview },
  methods: {
    ...mapMutations({ getUpdateTeacher: "getUpdateTeacher" })
  }
}
</script>

<style>

</style>