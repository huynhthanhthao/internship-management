<template>
<div class="view-assess-company animate__animated animate__fadeIn my-4">
    <div class="assess-company__title me-5 col-12">
        <h2 class="header-list label m-0 pt-2 fw-bold" style="color: #555555">
            Đánh giá thực tập của đơn vị
        </h2>
        <div class="line my-3"></div>
    </div>
    <div class="assess-company__detail my-4 ">
        <p class="assess-company__date" v-if="startDate"><strong>Thời gian thực tập:</strong> 
            <span> từ ngày {{startDate}}</span>
            <span v-if="tasks.length>=8"> đến ngày {{endDate}}</span>    
        </p>
        <p v-else style="color: red">Bạn chưa tham gia thực tập</p>
        <p class="assess-company__status" v-if="startDate">
            <strong>Trạng thái hoàn thành:</strong> 
            <span style="color: green" v-if="completedAssess"> Đã hoàn thành đánh giá</span>
            <span style="color: red" v-else> Chưa hoàn thành đánh giá</span>
        </p>
    </div>
    <div class="table-assess border rounded-4 p-3 col-8 d-flex flex-column m-auto" v-if="startDate">
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
                    <td>{{points[0]}}</td>
                </tr>
                <tr>
                    <th scope="row">I.1</th>
                    <td>Thực hiện nội quy của cơ quan (nếu thực tập online thì không chấm điểm)</td>
                    <td>{{points[1]}}</td>
                </tr>
                <tr>
                    <th scope="row">I.2</th>
                    <td>Chấp hành giờ giấc làm việc (nếu thực tập online thì không chấm điểm)</td>
                    <td>{{points[2]}}</td>
                </tr>
                <tr>
                    <th scope="row">I.3</th>
                    <td>Thái độ giao tiếp với cán bộ trong đơn vị (nếu thực tập online thì không chấm điểm)</td>
                    <td>{{points[3]}}</td>
                </tr>
                <tr>
                    <th scope="row">I.4</th>
                    <td>Tích cực trong công việc</td>
                    <td>{{points[4]}}</td>
                </tr>
                <tr>
                    <th scope="row">II</th>
                    <td style="font-weight: bold">Khả năng chuyên môn, nghiệp vụ</td>
                    <td>{{points[5]}}</td>
                </tr>
                <tr>
                    <th scope="row">II.1</th>
                    <td>Đáp ứng yêu cầu công việc</td>
                    <td>{{points[6]}}</td>
                </tr>
                <tr>
                    <th scope="row">II.2</th>
                    <td>Tinh thần học hỏi, nâng cao trình độ chuyên môn, nghiệp vụ</td>
                    <td>{{points[7]}}</td>
                </tr>
                <tr>
                    <th scope="row">II.3</th>
                    <td>Có đề xuất, sáng kiến, năng động trong công việc</td>
                    <td>{{points[8]}}</td>
                </tr>
                <tr>
                    <th scope="row">III</th>
                    <td style="font-weight: bold">Kết quả công tác</td>
                    <td>{{points[9]}}</td>
                </tr>
                <tr>
                    <th scope="row">III.1</th>
                    <td>Báo cáo tiến độ công việc cho cán bộ hướng dẫn mỗi tuần 1 lần</td>
                    <td>{{points[10]}}</td>
                </tr>
                <tr>
                    <th scope="row">III.2</th>
                    <td>Hoàn thành công việc được giao</td>
                    <td>{{points[11]}}</td>
                </tr>
                <tr>
                    <th scope="row">III.3</th>
                    <td>Kết quả công việc có đóng góp cho cơ quan nơi thực tập</td>
                    <td>{{points[12]}}</td>
                </tr>
                <tr>
                    <th></th>
                    <td style="font-weight: bold">Cộng</td>
                    <td>{{points[13]}}</td>
                </tr>
            </tbody>
        </table>
        <div class="comment">
           <p><strong>Nhận xét: </strong>{{companyAssess.messages}}</p> 
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "ViewAssessCompany",
    data(){
        return {
            points: []
        }
    },
    computed:{
        ...mapGetters({
            student: "getStudentInfor", 
            tasks:"getProgressInfor", 
            companyAssess: "getCompanyAssess",
            account: "getAccount",
        }),
        startDate(){
            return this.student.startDate;
        },
        endDate(){
            return this.tasks[this.tasks.length - 1].time;
        },

        // Kiem tra trang thai danh gia cua cong ty!
        completedAssess(){
            let pointLength = this.points.length;
            if (pointLength===0 || pointLength<15)
                return false;
            else return true;
        },
    },
    async created(){
        await this.$store.dispatch("setAccount");
        const id = this.$route.params.id ? this.$route.params.id : this.account.id;
        const rule = localStorage.getItem("rule").toLowerCase();
        const payload = {id, rule}
        await this.$store.dispatch("setCompanyAssess", payload);
        this.points = this.companyAssess.points;
    }

}
</script>

<style scoped>
    .table-assess{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
</style>