<template>
    <div class="assess-teacher animate__animated animate__fadeIn my-4">
        <div class="assess-teacher__title me-5 col-12">
            <h2
                class="header-list label m-0 p-2 pt-2 fw-bold"
                style="color: #555555"
            >
                Đánh giá kết quả thực tập
            </h2>
            <div class="line my-3"></div>
        </div>
        <div class="assess-teacher__detail my-4">
            <p class="assess-teacher__date">
                <strong>Thời gian thực tập:</strong>
                <span> từ ngày {{ startDate }}</span>
            </p>
            <p class="assess-teacher__status" v-if="completedAssess">
                <strong>Trạng thái đánh giá:</strong>
                <span style="color: red" v-if="assessPoint[16] === undefined">
                    Chưa đánh giá</span
                >
                <span style="color: green" v-else> Đã đánh giá</span>
            </p>
            <p style="color: red" v-if="!completedAssess">
                Giảng viên chưa thể đánh giá vì đơn vị thực tập chưa hoàn tất
                đánh giá.
            </p>
        </div>
        <form
            v-if="completedAssess"
            class="table-assess border rounded-4 p-3 col-9 d-flex m-auto flex-column"
        >
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" class="col-1">STT</th>
                        <th scope="col" class="col-8">Nội dung đánh giá</th>
                        <th scope="col" class="col-2">Điểm tối đa</th>
                        <th scope="col" class="col-1">Điểm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="font-weight: bold">
                        <th scope="row">I</th>
                        <td>Hình thức trình bày</td>
                        <td>1</td>
                        <td>{{ assessPoint[0] }}</td>
                    </tr>
                    <tr>
                        <th scope="row">I.1</th>
                        <td>
                            Đúng format của khoa (Trang bìa, trang lời cảm ơn,
                            trang đánh giá thực tập của khoa, trang mục lục và
                            các nội dung báo cáo). Sử dụng đúng mã và font tiếng
                            Việt (Unicode Times New Roman, Size 13)
                        </td>
                        <td>0.5</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[1]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">I.2</th>
                        <td>
                            Trình bày mạch lạc, súc tích, không có lỗi chính tả
                        </td>
                        <td>0.5</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[2]"
                            />
                        </td>
                    </tr>
                    <tr style="font-weight: bold">
                        <th scope="row">II</th>
                        <td>Phiếu theo dõi</td>
                        <td>4.75</td>
                        <td>{{ assessPoint[3] }}</td>
                    </tr>
                    <tr>
                        <th scope="row">II.1</th>
                        <td>Có lịch làm việc đầy đủ cho 8 tuần</td>
                        <td>0.25</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[4]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">II.2</th>
                        <td>
                            Số buổi thực tập tại cơ quan trong 1 tuần >=6; ít
                            hơn 6 buổi 0.0 điểm
                        </td>
                        <td>1.0</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[5]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">II.3</th>
                        <td>
                            Hoàn thành tốt kế hoạch công tác ghi trong lịch làm
                            việc. Cách tính điểm = (Điểm cộng của cán bộ hướng
                            dẫn/100) x 3.5
                        </td>
                        <td>3.5</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[6]"
                            />
                        </td>
                    </tr>
                    <tr style="font-weight: bold">
                        <th scope="row">III</th>
                        <td>Nội dung thực tập (quyển báo cáo)</td>
                        <td>4.25</td>
                        <td>{{ assessPoint[7] }}</td>
                    </tr>
                    <tr>
                        <th scope="row">III.1</th>
                        <td>
                            Có được sự hiểu biết tốt về cơ quan nơi thực tập
                        </td>
                        <td>0.5</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[8]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">III.2</th>
                        <td>
                            Phương pháp thực hiện phù hợp với nội dung công việc
                            được giao
                        </td>
                        <td>1.0</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[9]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">III.3</th>
                        <td>Kết quả củng cố lý thuyết</td>
                        <td>0.5</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[10]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">III.4</th>
                        <td>Kết quả rèn luyện kỹ năng thực hành</td>
                        <td>0.5</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[11]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">III.5</th>
                        <td>Kinh nghiệm thực tiễn thu nhận được</td>
                        <td>0.5</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[12]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">III.6</th>
                        <td>
                            Kết quả công việc có đóng góp cho cơ quan nơi thực
                            tập
                        </td>
                        <td>1.25</td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[13]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>Cộng</td>
                        <td>10</td>
                        <td>{{ assessPoint[14] }}</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>Điểm trừ</td>
                        <td></td>
                        <td>
                            <input
                                type="number"
                                class="w-100 form-control"
                                v-model="assessPoint[15]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>Điểm còn lại</td>
                        <td></td>
                        <td>{{ assessPoint[16] }}</td>
                    </tr>
                </tbody>
            </table>
            <button
                type="submit"
                class="btn btn-primary col-2 ms-auto"
                @click="assess($event)"
            >
                Lưu Đánh Giá
            </button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import config from "../../../config/index.js";

export default {
    name: "AssessTeachers",
    data() {
        return {
            studentId: "",
            points: [],
            assessPoint: [],
            time: "",
        };
    },
    computed: {
        ...mapGetters({
            student: "getStudentInfor",
            tasks: "getProgressInfor",
            companyAssess: "getCompanyAssess",
            teacherAssess: "getTeacherAssess",
        }),
        startDate() {
            return this.student.startDate;
        },
        completedAssess() {
            let pointLength = this.points.length;
            // Tong so diem danh gia cua cong ty la 15 diem. Neu chua du 15 co nghia la chua hoan tat danh gia.
            if (pointLength === 0 || pointLength < 14) return false;
            else return true;
        },
    },
    async created() {
        this.studentId = this.$route.params.id;
        const rule = localStorage.getItem("rule").toLowerCase();
        const payload = { id: this.studentId, rule };
        // Lay va dat diem danh gia cua cong ty vao Store de su dung.
        await this.$store.dispatch("setCompanyAssess", payload);
        this.points = this.companyAssess.points;
        // Lay va dat diem danh gia cua giang vien vao Store de su dung.
        await this.$store.dispatch("setTeacherAssess", payload);

        // Deep Clone diem danh gia cua giang vien!
        this.assessPoint = JSON.parse(JSON.stringify(this.teacherAssess));

        // Khoi tao diem danh gia de hien len giao dien!
        this.setAssessPoint();
    },
    methods: {
        // Tinh toan diem danh gia cua giang vien.
        setAssessPoint() {
            this.assessPoint[0] =
                this.assessPoint[3] =
                this.assessPoint[7] =
                this.accessPoint[14] =
                this.accessPoint[16] =
                    0;
            // Diem danh gia cua giang vien la null hoac rong hoac khong phai so thi dac mac dinh la 0
            this.assessPoint = this.assessPoint.map((point) => {
                point = point === null || point === "" ? 0 : point;
                return point;
            });
            this.assessPoint.forEach((point, index) => {
                switch (index) {
                    case 1:
                    case 2:
                        this.assessPoint[0] += point;
                        break;
                    case 4:
                    case 5:
                    case 6:
                        this.assessPoint[3] += point;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                        this.assessPoint[7] += point;
                        break;
                    case 14:
                        this.assessPoint[14] =
                            this.assessPoint[0] +
                            this.assessPoint[3] +
                            this.assessPoint[7];
                        break;
                    case 16:
                        console.log(this.assessPoint[16]);

                        this.assessPoint[16] =
                            this.assessPoint[14] - this.assessPoint[15];
                        break;
                }
            });
        },

        // Xu ly su kien <Luu danh gia>!
        async assess(event) {
            //Chan load lai trang
            event.preventDefault();

            //Xu ly diem danh gia cua giang vien.
            this.setAssessPoint();
            const token = localStorage.getItem("token");
            const response = await axios.put(
                `${config.domain}/teacher/assess-result`,
                { studentId: this.studentId, points: this.assessPoint },
                {
                    headers: { Authorization: "Bearer " + token },
                }
            );
            this.$store.dispatch("setToast", {
                isSuccess: true,
                message: response.data.message,
            });
        },
    },
};
</script>

<style scoped>
.score {
    width: 100%;
}
.table-assess {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
