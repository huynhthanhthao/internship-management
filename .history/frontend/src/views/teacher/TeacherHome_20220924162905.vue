<template>
  <div class="teacher-manage">
      <div
          class="students-register row p-4 animate__fadeIn animate__animated"
      >
          <div class="col-12">
              <div class="d-flex">
                  <h2
                      class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                      style="color: #555555"
                  >
                      Danh sách sinh viên
                      
                  </h2>
                  <div class="line my-3"></div>
                  <h2
                      class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                      style="color: #555555"
                  >
                      Tổng quan 
                      <div class="line my-3"></div>
                  </h2>
              </div>
          </div>
          <div class="col-6">
            <TeacherListStudent/>
          </div>
          <div class="col-6">
            <TeacherDetailStudent/>
          </div>
      </div>
  </div>
</template>

<script>
import TeacherListStudent from '@/components/Teacher/TeacherListStudent.vue';
import TeacherDetailStudent from '@/components/Teacher/TeacherDetailStudent.vue';
import { mapMutations } from 'vuex';
export default {
    name: "TeacherManage",
    components: { TeacherListStudent, TeacherDetailStudent },
    methods: {
        ...mapMutations({getUpdateTeacher :"getUpdateTeacher"})
    }
}
</script>

<style>

</style>