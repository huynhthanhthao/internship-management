<template>
    <div>
        <div
            class="statistics d-flex justify-content-center animate__fadeIn animate__animated"
        >
            <Bar
                :chart-options="chartOptions"
                :chart-data="chartData"
                :chart-id="chartId"
                :dataset-id-key="datasetIdKey"
                :plugins="plugins"
                :css-classes="cssClasses"
                :styles="styles"
                :width="width"
                :height="height"
                style="width: 500px"
            />
        </div>
        <h6 class="fw-bolder col-12 text-center mt-3">
            Biểu đồ thể hiện số lượng sinh viên <br />
            đang thực tập được quản lý bởi giảng viên
        </h6>
    </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);
export default {
    name: "StatisticsTeacher",
    components: { Bar },
    props: {
        chartId: {
            type: String,
            default: "bar-chart",
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
            default: () => {},
        },
        plugins: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            chartData: {
                labels: [
                    "Nguyễn Văn Hùng",
                    "Trần Thái Tâm",
                    "Nguyễn Tiến Minh",
                    "Hoàng Văn An",
                    "Lữ Thị Diễm",
                ],
                backgroundColor: "#1f5caa",
                datasets: [
                    {
                        label: "Số lượng sinh viên đang thực tập",
                        backgroundColor: "#1f5caa",
                        data: [40, 25, 31, 18, 50, 39, 80, 40, 20, 12, 11],
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
