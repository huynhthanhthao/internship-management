<template>
  <Pie :chart-data="chartData" style="width: 400px; height: 400px" class="m-auto"/>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['TMA', 'NFQ', 'Van Tung', 'CUSC', 'Khac'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#000'],
            data: [40, 20, 80, 10, 20]
          }
        ]
      },
      chartoption: {
        responsive: true,
      maintainAspectRatio: false
      }
    }
  }
}
</script>