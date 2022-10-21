<template>
    <div class="view p-4 animate__animated animate__fadeIn">
        <div class="infor">
            <ViewListStructure :title="title"/>
            <div class="row m-0 d-flex justify-content-between">
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
                "MSSV": "B1906758",
                "Họ và tên": "Đặng Hồ Trường Phúc",
                "Email": "phucevacodon@gmail.com",
                "Vị trí thực tập": "Đầu bếp",
                "Đơn vị": "Công ty TNHH Mai Phá Sản"
            },
            inforCompany: {
                "Đơn vị thực tập": "Công ty TNHH Mai Phá Sản",
                "Email":"contacts@mps.com",
                "Số điện thoại": "0999489362",
                "Địa chỉ": "Ninh Kiều, Cần Thơ",
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