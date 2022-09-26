<template>
  <div class="teacher-detail-student" v-if="">

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