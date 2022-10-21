<template>
    <div class="assess-teacher animate__animated animate__fadeIn my-4">
        <div class="assess-teacher__title me-5 col-12">
            <h2 class="header-list label m-0 p-2 pt-2 fw-bold" style="color: #555555">
                Đánh giá thực tập của giảng viên
            </h2>
            <div class="line my-3"></div>
        </div>
        <div class="assess-teacher__detail my-4 ">
            <p class="assess-teacher__infor"><strong>Giảng viên chấm báo cáo: </strong>Nguyễn Văn A</p>
            <p class="assess-teacher__date"><strong>Thời gian thực tập:</strong> từ ngày 19-05-2022 đến 20-07-2022</p>
            <p class="assess-teacher__status"><strong>Trạng thái hoàn thành:</strong> <span style="color: red">Chưa hoàn
                    thành đánh giá</span></p>
        </div>
        <div class="rounded-4 p-3 mx-auto my-3 col-8 d-flex flex-column">
            <table class="table table-assess">
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
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">I.1</th>
                        <td>Đúng format của khoa (Trang bìa, trang lời cảm ơn, trang đánh giá thực tập của khoa, trang
                            mục lục và các nội dung báo
                            cáo). Sử dụng đúng mã và font tiếng Việt (Unicode Times New Roman, Size 13)</td>
                        <td>0.5</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">I.2</th>
                        <td>Trình bày mạch lạc, súc tích, không có lỗi chính tả</td>
                        <td>0.5</td>
                        <td>0</td>
                    </tr>
                    <tr style="font-weight: bold">
                        <th scope="row">II</th>
                        <td>Phiếu theo dõi</td>
                        <td>4.75</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">II.1</th>
                        <td>Có lịch làm việc đầy đủ cho 8 tuần</td>
                        <td>0.25</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">II.2</th>
                        <td>Số buổi thực tập tại cơ quan trong 1 tuần >=6; ít hơn 6 buổi 0.0 điểm</td>
                        <td>1.0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">II.3</th>
                        <td>Hoàn thành tốt kế hoạch công tác ghi trong lịch làm việc.
                            Cách tính điểm = (Điểm cộng của cán bộ hướng dẫn/100) x 3.5</td>
                        <td>3.5</td>
                        <td>0</td>
                    </tr>
                    <tr style="font-weight: bold">
                        <th scope="row">III</th>
                        <td>Nội dung thực tập (quyển báo cáo)</td>
                        <td>4.25</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">III.1</th>
                        <td>Có được sự hiểu biết tốt về cơ quan nơi thực tập</td>
                        <td>0.5</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">III.2</th>
                        <td>Phương pháp thực hiện phù hợp với nội dung công việc được giao</td>
                        <td>1.0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">III.3</th>
                        <td>Kết quả củng cố lý thuyết</td>
                        <td>0.5</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">III.4</th>
                        <td>Kết quả rèn luyện kỹ năng thực hành</td>
                        <td>0.5</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">III.5</th>
                        <td>Kinh nghiệm thực tiễn thu nhận được</td>
                        <td>0.5</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th scope="row">III.6</th>
                        <td>Kết quả công việc có đóng góp cho cơ quan nơi thực tập</td>
                        <td>1.25</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>Cộng</td>
                        <td>10</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>Điểm trừ</td>
                        <td></td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>Điểm còn lại</td>
                        <td></td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
            
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: "ViewAssessTeacher",
    computed: {
        ...mapGetters({
            getShowAssess: "getShowAssess"
        })
    },
    methods: {
        ...mapMutations({
            showAssess: "SHOW_ASSESS"
        })
    }
}
</script>

<style scoped>
.score {
    width: 100%;
}

.table-assess {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>