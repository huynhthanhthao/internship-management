<template>
  <div class="teacher--update mt-5" v-if="getUpdateTeacher">
    <h3 class="update__title text-center">Cập nhật thông tin cá nhân</h3>
    <div class="form-update m-auto mt-5">
        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Họ và tên</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'; 
export default {
    name: "TeacherUpdate",
    computed:{
        ...mapGetters(["getUpdateTeacher"])
    }
}
</script>

<style>
    .form-update{
        width: 35%;
    }
</style>