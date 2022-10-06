<template>
  <HomePage :name="name" />
</template>

<script>
import HomePage from '@/components/GlobalComponent/HomePage.vue';
export default {
  name: "TeacherHome",
  components: { HomePage },
  data() {
    return {
      name: "Nguyễn Văn A"
    }
  }
}
</script>

<style scoped>

</style>