<template>
<div class="assess-company animate__animated animate__fadeIn" v-if="getShowAssess">
    <div class="assess-company__title me-5 col-12">
        <h2 class="header-list label m-0 p-2 pt-2 fw-bold" style="color: #555555">
            Đánh giá thực tập của đơn vị
        </h2>
        <div class="line my-3"></div>
    </div>
    <div class="assess-company__detail my-4 ">
        <p class="assess-company__date"><strong>Thời gian thực tập:</strong> từ ngày 19-05-2022 đến 20-07-2022</p>
        <p class="assess-company__status"><strong>Trạng thái hoàn thành:</strong> <span style="color: red">Chưa hoàn
                thành đánh giá</span></p>
        <button type="button" class="btn btn-primary" @click="closeAssess">Đánh giá kết quả thực tập</button>
    </div>
    <div class="table-assess border rounded-4 p-3 col-8 d-flex m-auto">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="col-1">STT</th>
                    <th scope="col" class="col-10">Nội dung đánh giá</th>
                    <th scope="col" class="col-1">Điểm</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">I</th>
                    <td style="font-weight: bold">Tinh thần kỷ luật</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">I.1</th>
                    <td>Thực hiện nội quy của cơ quan (nếu thực tập online thì không chấm điểm)</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">I.2</th>
                    <td>Chấp hành giờ giấc làm việc (nếu thực tập online thì không chấm điểm)</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">I.2</th>
                    <td>Chấp hành giờ giấc làm việc (nếu thực tập online thì không chấm điểm)</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">I.3</th>
                    <td>Thái độ giao tiếp với cán bộ trong đơn vị (nếu thực tập online thì không chấm điểm)</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">I.4</th>
                    <td>Tích cực trong công việc</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">II</th>
                    <td style="font-weight: bold">Khả năng chuyên môn, nghiệp vụ</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">II.1</th>
                    <td>Đáp ứng yêu cầu công việc</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">II.2</th>
                    <td>Tinh thần học hỏi, nâng cao trình độ chuyên môn, nghiệp vụ</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">II.3</th>
                    <td>Có đề xuất, sáng kiến, năng động trong công việc</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">III</th>
                    <td style="font-weight: bold">Kết quả công tác</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">III.1</th>
                    <td>Báo cáo tiến độ công việc cho cán bộ hướng dẫn mỗi tuần 1 lần</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">III.2</th>
                    <td>Hoàn thành công việc được giao</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">III.3</th>
                    <td>Kết quả công việc có đóng góp cho cơ quan nơi thực tập</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th></th>
                    <td style="font-weight: bold">Cộng</td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: "AssessCompany",
    computed:{
        ...mapGetters({
            getShowAssess: "getShowAssess"
        })
    },
    methods:{
        ...mapMutations({
            closeAssess: "CLOSE_ASSESS"
        })
    }
}
</script>

<style scoped>
    .table-assess{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
</style>