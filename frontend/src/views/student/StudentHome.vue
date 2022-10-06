<template>
  <HomePage :name="name"/>
</template>

<script>
import HomePage from '@/components/GlobalComponent/HomePage.vue';
export default {
    name:"StudentHome",
    components: { HomePage },
    data(){
      return{
        name: "Huỳnh Thanh Thảo"
      }
    }
}
</script>

<style scoped>

</style>