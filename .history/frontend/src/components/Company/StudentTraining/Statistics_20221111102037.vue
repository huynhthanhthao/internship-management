<template>
    <div>
        <div
            class="statistics d-flex justify-content-center mt-5 animate__fadeIn animate__animated"
        >
            <Pie
                :chart-options="chartOptions"
                :chart-data="chartData"
                :chart-id="chartId"
                :dataset-id-key="datasetIdKey"
                :plugins="plugins"
                :css-classes="cssClasses"
                :styles="styles"
                :width="width"
                :height="height"
                style="width: 450px"
            />
        </div>
        <h6 class="fw-bolder col-12 text-center mt-3">
            Biểu đồ thể hiện số lượng sinh viên thực tập tại các vị trí
        </h6>
    </div>
</template>

<script>
import { Pie } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
} from "chart.js";
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
export default {
    name: "StatisticsTraining",
    components: {
        Pie,
    },
    props: {
        chartId: {
            type: String,
            default: "pie-chart",
        },
        width: {
            type: Number,
            default: 400,
        },
        height: {
            type: Number,
            default: 400,
        },
        cssClasses: {
            default: "",
            type: String,
        },
        styles: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            chartData: {
                labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
                datasets: [
                    {
                        backgroundColor: [
                            "#41B883",
                            "#E46651",
                            "#00D8FF",
                            "#DD1B16",
                        ],
                        data: [40, 20, 80, 10],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
            },
        };
    },
};
</script>

<style></style>
