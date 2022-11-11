<template>
<div class="view-progress my-4 animate__animated animate__fadeIn">
    <div class="view-progress__content mb-3">
        <div class="view-progress__title col-6 me-5 ">
            <h2 class="header-list label m-0 pt-2 fw-bold" style="color: #555555">
                Thông tin tiến độ thực tập
            </h2>
            <div class="line my-3 "></div>
        </div>
        <div class="view-progress__detail my-4 ">
            <p class="view-progress__date" v-if="startDate" ><strong>Thời gian thực tập: </strong> từ ngày 
                <span>{{startDate}}</span>
                <span > đến ngày {{ tasks[tasks.length-1]  }}</span>
            </p>
            <p v-else style="color: red">Bạn chưa tham gia thực tập</p>
            <p class="view-progress__status" v-if="startDate">
                <strong>Trạng thái hoàn thành: </strong> 
                <span class="text-info" v-if="!completedAssess">Sinh viên đang thực tập</span>
                <span class="text-success" v-else> Đã hoàn thành thực tập</span>
            </p>
        </div>
        <div class="progress" v-if="startDate">
            <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" :style="`width: ${progress}%`"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{progress}}%
            </div>
        </div>
    </div>
    <div class="table-progress border rounded-4 p-3" v-if="startDate">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" style="width: 5%">Tuần</th>
                    <th scope="col" style="width: 50%">Nội dung công việc</th>
                    <th scope="col" style="width: 10%">Thời hạn</th>
                    <th scope="col" style="width: 35%">Nhận xét</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <th scope="row">{{++index}}</th>
                    <td>{{task.title}}</td>
                    <td>{{task.time}}</td>
                    <td>{{task.message}}</td>
                </tr>
            </tbody>
        </table>
    </div>  
</div> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "ViewProgress",
    data(){
        return {
            points: [],
            time: ""
        }
    },
    computed: {
        ...mapGetters({tasks: "getProgressInfor", student: "getStudentInfor", companyAssess: "getCompanyAssess"}),
        startDate() {
            return this.student.startDate;
        },
        progress(){
            return this.tasks.length * 100 / 8 ; 
        },
        completedAssess() {
            let pointLength = this.points.length;
            if (pointLength === 0 || pointLength < 14)
                return false;
            else return true;
        },
    },
    async created() {
        await this.$store.dispatch("setAccount");
        const id = this.$route.params.id ? this.$route.params.id : this.account.id;
        const rule = localStorage.getItem("rule").toLowerCase();
        const payload = { id, rule }
        await this.$store.dispatch("setCompanyAssess", payload);
        this.points = this.companyAssess.points;
        await this.$store.dispatch("setProgressInfor", payload);
        this.time = this.tasks[this.tasks.length-1].time
       
    }
}
</script>

<style scoped>
    .view-progress__title{
        max-width: 48%;
    }

    .table-progress{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
</style>