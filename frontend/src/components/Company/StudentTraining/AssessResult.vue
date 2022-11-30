<template>
    <div class="assess-result">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div
            class="modal fade"
            id="AssessResultModal"
            tabindex="-1"
            aria-labelledby="ModalLabel"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered"
                style="min-width: 800px !important"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold" id="ModalLabel">
                            Đánh giá kết quả thực tập
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="table-assess d-flex">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="col-1">STT</th>
                                        <th scope="col" class="col-10">
                                            Nội dung đánh giá
                                        </th>
                                        <th scope="col" class="col-1">Điểm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">I</th>
                                        <td style="font-weight: bold">
                                            Tinh thần kỷ luật
                                        </td>
                                        <td>{{ points[0] }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">I.1</th>
                                        <td>
                                            Thực hiện nội quy của cơ quan (nếu
                                            thực tập online thì không chấm điểm)
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[1]"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">I.2</th>
                                        <td>
                                            Chấp hành giờ giấc làm việc (nếu
                                            thực tập online thì không chấm điểm)
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[2]"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">I.3</th>
                                        <td>
                                            Thái độ giao tiếp với cán bộ trong
                                            đơn vị (nếu thực tập online thì
                                            không chấm điểm)
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[3]"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">I.4</th>
                                        <td>Tích cực trong công việc</td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[4]"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">II</th>
                                        <td style="font-weight: bold">
                                            Khả năng chuyên môn, nghiệp vụ
                                        </td>
                                        <td>{{ points[5] }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">II.1</th>
                                        <td>Đáp ứng yêu cầu công việc</td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[6]"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">II.2</th>
                                        <td>
                                            Tinh thần học hỏi, nâng cao trình độ
                                            chuyên môn, nghiệp vụ
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[7]"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">II.3</th>
                                        <td>
                                            Có đề xuất, sáng kiến, năng động
                                            trong công việc
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[8]"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">III</th>
                                        <td style="font-weight: bold">
                                            Kết quả công tác
                                        </td>
                                        <td>{{ points[9] }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">III.1</th>
                                        <td>
                                            Báo cáo tiến độ công việc cho cán bộ
                                            hướng dẫn mỗi tuần 1 lần
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[10]"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">III.2</th>
                                        <td>Hoàn thành công việc được giao</td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[11]"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">III.3</th>
                                        <td>
                                            Kết quả công việc có đóng góp cho cơ
                                            quan nơi thực tập
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                class="w-100 form-control"
                                                v-model="points[12]"
                                            />
                                        </td>
                                    </tr>

                                    <tr class="text-danger">
                                        <td style="font-weight: bold">Tổng</td>
                                        <td></td>

                                        <td>{{ points[13] }}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <textarea
                                                name=""
                                                id=""
                                                cols="10"
                                                rows="3"
                                                class="form-control"
                                                placeholder="Nhận xét thêm..."
                                                v-model="message"
                                            ></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Đóng
                        </button>

                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                            @click="handleAssess"
                            :disabled="
                                !points[1] ||
                                !points[2] ||
                                !points[3] ||
                                !points[4] ||
                                !points[6] ||
                                !points[7] ||
                                !points[8] ||
                                !points[10] ||
                                !points[11] ||
                                !points[12]
                            "
                        >
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";

export default {
    name: "AssessResult",
    data() {
        return { points: [], message: "" };
    },
    methods: {
        async handleAssess() {
            const token = localStorage.getItem("token");
            const studentId = this.$route.params.studentId;
            this.points[0] = (
                (this.points[1] +
                    this.points[2] +
                    this.points[3] +
                    this.points[4]) /
                4
            ).toFixed(1);

            this.points[5] = (
                (this.points[6] + this.points[7] + this.points[8]) /
                3
            ).toFixed(1);

            this.points[9] = (
                (this.points[10] + this.points[11] + this.points[12]) /
                3
            ).toFixed(1);

            this.points[13] = (
                (+this.points[0] + +this.points[5] + +this.points[9]) /
                3
            ).toFixed(1);

            const res = await axios.patch(
                `${config.domain}/company/assess-result`,
                {
                    studentId,
                    points: this.points,
                    message: this.message,
                },
                { headers: { Authorization: "Bearer " + token } }
            );

            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });
        },
    },
    async mounted() {
        try {
            const token = localStorage.getItem("token");
            const studentId = this.$route.params.studentId;
            const res = await axios.get(
                `${config.domain}/company/get-company-assess`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: {
                        studentId,
                    },
                }
            );
            this.points = res.data.result.points;
            this.message = res.data.result.message;
        } catch (error) {
            console.log(error);
        }
    },
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
