<template>
  <div class="teacher-detail-student" v-if="getDetailStudent">
    <h1>Detail Student </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "TeacherDetailStudent",
    computed: {
      ...mapGetters(["getDetailStudent"])
    }
}
</script>

<style>

</style>