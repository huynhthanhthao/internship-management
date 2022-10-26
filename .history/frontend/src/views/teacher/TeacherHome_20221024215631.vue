<template>
  <HomePage :name="name" />
</template>

<script>
import HomePage from '@/components/GlobalComponent/HomePage.vue';
import { mapGetters } from 'vuex';
export default {
  name: "TeacherHome",
  components: { HomePage },
  data() {
    return {
      name: "Nguyễn Văn A"
    }
  },
  computed: {
    ...mapGetters({account: "getAccount"})
  }
}
</script>

<style scoped>

</style>