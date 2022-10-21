<template>
  <HomePage :name="name"></HomePage>
</template>

<script>
import HomePage from '../company/HomePage.vue';
export default {
    name: "AdminHome",
    components: { HomePage },
    data(){
        return{
            name: "Admin"
        }
    }
}
</script>

<style>

</style>