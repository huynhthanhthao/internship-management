<template>
  <div class="teacher--update" >
    <h3 class="update__title">Cập nhật thông tin cá nhân</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'; 
export default {
    name: "TeacherUpdate",
    computed:{
        ...mapGetters(["TeacherModule"])
    }
}
</script>

<style>

</style>