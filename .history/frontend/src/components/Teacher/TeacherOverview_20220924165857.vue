<template>
  
</template>

<script>
import { Line } from 'vue-chartjs'

export default {
    name: "TeacherOverview",
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

<style>

</style>