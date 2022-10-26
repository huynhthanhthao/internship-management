<template>
  <HomePage :name="account.name" />
</template>

<script>
import HomePage from '@/components/GlobalComponent/HomePage.vue';
import { mapGetters } from 'vuex';
export default {
  name: "TeacherHome",
  components: { HomePage },
  computed: {
    ...mapGetters({account: "getAccount"})
  }
}
</script>

<style scoped>

</style>