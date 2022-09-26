<template>
  <div class="teacher--update " v-if="getUpdateTeacher">
    <h3 class="update__title text-center">Cập nhật thông tin cá nhân</h3>
    <p>{{getUpdateTeacher}}</p>
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