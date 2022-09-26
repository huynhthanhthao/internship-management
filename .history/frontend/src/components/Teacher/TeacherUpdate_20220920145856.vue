<template>
  <div class="teacher--update" v-if="true">
    <h3 class="update__title">Cập nhật thông tin cá nhân</h3>
    <p>{{TeacherModule.showUpdate}}</p>
  </div>
</template>

<script>
import TeacherModule from '@/store/Modules/TeacherModule';
import { mapGetters, mapState } from 'vuex'; 
export default {
    name: "TeacherUpdate",
    computed:{
        ...mapState(["TeacherModule"]),
        ...mapGetters(["TeacherModule"])
    }
}
</script>

<style>

</style>