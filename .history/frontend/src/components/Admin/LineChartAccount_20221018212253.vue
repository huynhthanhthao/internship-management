<template>
    <div class="hello">
        <line-chart :chart-data="dataCollection"></line-chart>
    </div>
</template>

<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
    extends: Line,
    mixins: [reactiveProp],
    name: "LineChartAccount",
    data() {
        return {
            dataCollection: {
                labels: ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6", "week 7", "week 8", "week 9", "week 10"],
                datasets: [
                    {
                        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                        label: "Africa",
                        borderColor: "#3e95cd",
                        fill: false
                    },
                    {
                        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                        label: "Asia",
                        borderColor: "#8e5ea2",
                        fill: false
                    },
                    {
                        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                        label: "Europe",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                        label: "Latin America",
                        borderColor: "#e8c3b9",
                        fill: false
                    },
                    {
                        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                        label: "North America",
                        borderColor: "#c45850",
                        fill: false
                    }
                ]
            }
        };
    }
};
</script>

<style scoped>

</style>
