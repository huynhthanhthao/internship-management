<template>
  <div class="teacher--update" v-if="getShowUpdate">
    <h3 class="update__title">Cập nhật thông tin cá nhân</h3>
    <p>{{getShowUpdate}}</p>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'; 
export default {
    name: "TeacherUpdate",
    computed:{
        ...mapGetters(["getShowUpdate"])
    }
}
</script>

<style>

</style>