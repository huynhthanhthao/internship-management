<template>
    <div class="chart-account mt-4 animate__fadeIn animate__animated row">
        <TitleStructure :title="`Biểu đồ thống kê`" class="col-12"></TitleStructure>
        <Line :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" class="col-8 mx-auto"/>
        <h6 class="fw-bolder col-12 text-center mt-3">
            Biểu đồ thể hiện số lượng tài khoản được tạo theo tháng
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
                        label: "Tài khoản sinh viên",
                        backgroundColor: "#1f5caa",
                        borderColor: "#1f5caa",
                        data: [
                            10, 20, 15, 20, 11, 18, 33, 40, 12, 12, 17, 9, 30,
                        ],
                    },
                    {
                        label: "Tài khoản giảng viên",
                        backgroundColor: "#ff504a",
                        borderColor: "#ff504a",
                        data: [
                            1, 2, 4, 1, 2, 1, 2, 0, 0, 1, 0, 4, 5,
                        ],
                    },
                    {
                        label: "Tài khoản đơn vị thực tập",
                        backgroundColor: "#2fd163",
                        borderColor: "#2fd163",
                        data: [
                            0, 0, 10, 2, 1, 3, 0, 0, 0, 0, 0, 9, 1,
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
