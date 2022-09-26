<template>
  <div class="teacher--update" v-if="getShowUpdate">
    <h3 class="update__title">Cập nhật thông tin cá nhân</h3>
    <p>{{getShowInfor}}</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'; 
export default {
    name: "TeacherUpdate",
    computed:{
        ...mapGetters(["getShowUpdate", "getShowInfor"])
    }
}
</script>

<style>

</style>