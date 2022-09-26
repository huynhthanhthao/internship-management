<template>
  <div class="teacher--update" v-if="true">
    <h3 class="update__title">Cập nhật thông tin cá nhân</h3>
    <p>{{TeacherModule.showUpdate}}</p>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'; 
export default {
    name: "TeacherUpdate",
    computed:{
        ...mapState(["TeacherModule"]),
        ...mapGetters(["getShowUpdate"])
    }
}
</script>

<style>

</style>