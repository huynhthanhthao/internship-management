<template>
    <div class="statistics  mt-5 animate__fadeIn animate__animated">
        <TitleStructure :title="`Biểu đồ thống kê`"></TitleStructure>
        <Line :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
        <h6 class="fw-bolder col-12 text-center mt-3">
            Biểu đồ thể hiện số lượng sinh viên đăng ký thực tập
        </h6>
    </div>
</template>

<script>
import { Line } from "vue-chartjs";

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
} from "chart.js";
import TitleStructure from "../GlobalComponent/TitleStructure.vue";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
);
export default {
    name: "LineChatAccount",
    components: { Line, TitleStructure },
    props: {
        chartId: {
            type: String,
            default: "line-chart",
        },
        datasetIdKey: {
            type: String,
            default: "label",
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
            default: () => { },
        },
        plugins: {
            type: Object,
            default: () => { },
        },
    },
    data() {
        return {
            chartData: {
                labels: [
                    "Tháng 1",
                    "Tháng 2",
                    "Tháng 3",
                    "Tháng 4",
                    "Tháng 5",
                    "Tháng 6",
                    "Tháng 7",
                    "Tháng 8",
                    "Tháng 9",
                    "Tháng 10",
                    "Tháng 11",
                    "Tháng 12",
                ],
                datasets: [
                    {
                        label: "Sinh viên đăng ký thực tập",
                        backgroundColor: "#1f5caa",
                        data: [
                            40, 39, 10, 50, 39, 80, 40, 39, 10, 40, 46, 80, 40,
                        ],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
};
</script>

<style>

</style>
