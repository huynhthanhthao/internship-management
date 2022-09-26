<!-- <template>
  <Pie :chart-data="chartData" :chart-option="chartOption" style="width: 400px; height: 400px" class="m-auto"/>
  <h4></h4>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'PieChart',
  components: { Pie },
  computed:{
    chartData(){
      return {
        labels: ['TMA', 'NFQ', 'Van Tung', 'CUSC', 'Khac'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#000'],
            data: [40, 20, 80, 10, 20]
          }
        ]
      }
    },
    chartOption(){
      return {
        font: {
          size: 20
        }
      }
    }
  }
}
</script> -->

<template>
  <Bar :chart-data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'TMA', 'Ngân hàng Thương tín', 'NFQ Asia', 'Tập đoàn Trường Phát', 'Khác'],
        datasets: [
          {
            label: 'Số lượng sinh viên',
            backgroundColor: ['#f87979', '#12f21f'],
            data: [40, 20, 12]
          }
        ]
      }
    }
  }
}
</script>