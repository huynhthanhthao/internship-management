<template>
  <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
import {Chart} from "vue-chart"
export default {
  name: "TeacherOverView",
  mounted(){
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    }),
  }
}

</script>

<style>

</style>