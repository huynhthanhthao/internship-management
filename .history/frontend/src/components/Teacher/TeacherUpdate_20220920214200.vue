<template>
  <div class="teacher--update mt-5" v-if="getUpdateTeacher">
    <h3 class="update__title text-center">Cập nhật thông tin cá nhân</h3>
    <div class="form-update m-auto mt-5 row">
        <form>
            <div class="mb-3 col-sm-1 col-md-1 col-lg-4 col-xl-4 col-xxl-4">
              <label for="fullname" class="form-label">Họ và tên</label>
              <input type="text" class="form-control" id="fullname" aria-describedby="name">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3 form-check">
              
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

</style>