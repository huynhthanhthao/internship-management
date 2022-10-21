<template>
    <div class="view p-4 animate__animated animate__fadeIn">
        <div class="infor">
            <ViewListStructure :title="title"/>
            <div class="row m-0 pt-3 pb-5 border-bottom justify-content-between">
                <ObjectInfor :infor="inforStudent"/>
                <ObjectInfor :infor="inforCompany"/>
            </div>
        </div>
        <InforInternship/>
    </div>
</template>

<script>

import InforInternship from '@/components/Teacher/ProgressAssess/InforInternship.vue';
import ViewListStructure from '@/components/GlobalComponent/ViewListStructure.vue';
import ObjectInfor from '@/components/GlobalComponent/ObjectInfor.vue';
export default {
    name: "TeacherView",
    data(){
        return {
            title: {
                headerList: "Thông tin sinh viên",
                headerDetail: "Thông tin đơn vị thực tập"
            },
            inforStudent: {
                "MSSV": "B1900001",
                "Họ và tên": "Huỳnh Thanh Thảo",
                "Email": "thaob1900001@student.ctu.edu.vn",
                "Vị trí thực tập": "Frontend Developer",
                "Đơn vị": "Tập đoàn viễn thông quân đội Viettel"
            },
            inforCompany: {
                "Đơn vị thực tập": "Tập đoàn viễn thông quân đội Viettel",
                "Email":"contacts@viettel.com",
                "Số điện thoại": "0999489362",
                "Địa chỉ": "Xuân Khánh, Ninh Kiểu, Cần Thơ",
            }
        }
    },
    components: { InforInternship, ViewListStructure, ObjectInfor },
}
</script>

<style scoped>
.table-progress {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>