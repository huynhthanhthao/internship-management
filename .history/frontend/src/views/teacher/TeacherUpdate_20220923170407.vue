<template>
  <div class="teacher--update my-5" v-if=true>
    <h3 class="update__title text-center">Cập nhật thông tin cá nhân</h3>

    <div class="form-update col-sm-6 mt-5 p-5 rounded-5 m-auto row d-flex justify-content-center">
      <TeacherAvatar/>
      <form class="form-update-infor ms-5 col-sm-8 col-lg-5 col-xl-4 col-xxl-4 flex-grow-1">
          <div class="mb-3 ">
            <label for="fullname" class="form-label">Họ và tên</label>
            <input type="text" class="form-control" id="fullname" aria-describedby="name">
          </div>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3 ">
            <label for="phone" class="form-label">Số điện thoại</label>
            <input type="text" class="form-control" id="phone" aria-describedby="name">
          </div>
          <div class="mb-3">
            <label for="avatar" class="form-label">Cập nhật ảnh đại diện </label>
            <input type="file" id="avatar" name="avatar"
            accept="image/png, image/jpeg"/>
          </div>
          <div class="form__footer d-flex justify-content-around mt-5">
            <button type="submit" class="btn btn-danger" @click="btnPreventDefault">
              <i class="bi bi-arrow-clockwise"></i>&nbsp;Đặt lại
            </button>
            <button type="submit" class="btn btn-primary btn-save" @click="CLOSE_UPDATE">
              <i class="bi bi-calendar4"></i>&nbsp;Lưu
            </button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
import TeacherAvatar from '../../components/Teacher/TeacherAvatar.vue'; 
export default {
    name: "TeacherUpdate",
    computed: {
      ...mapGetters({getUpdateTeacher: "getUpdateTeacher"})
    },
    methods: {
      ...mapMutations(["CLOSE_UPDATE"]),
        btnPreventDefault(event) {
            event.preventDefault();
        }
    },
    components: { TeacherAvatar }
}
</script>

<style>
  .btn-save{
    min-width: 70px;
  }

  .form-update{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
</style>