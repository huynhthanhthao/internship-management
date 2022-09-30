<template>
<div class="infor-student col-6 d-flex  mb-4 p-3 border rounded-4 me-3 pe-0">
    <AvatarComponent :avatar="avatar" class="col-5 me-4"/>
    <div class="col-7 flex-grow-1">
        <div class="col-12 my-1"><strong>MSSV: </strong> B1906570</div>
        <div class="col-12 my-1">
            <strong>Họ và tên: </strong> Huỳnh Thanh Thảo
        </div>
        <div class="col-12 my-1">
            <strong>Email: </strong> thaoB1906758@student.ctu.edu.vn
        </div>
        <div class="col-12 my-1">
            <strong>Vị trí thực tập: </strong> Frontend Developer
        </div>
        <div class="col-12 my-1">
            <strong>Đơn vị thực tập: </strong> Công ty TNHH MTV An Toàn
            Khu
        </div>
    </div>
</div>
</template>

<script>
import AvatarComponent from "../Infor/AvatarComponent.vue";
export default {
    name: "InforStudent",
    data() {
        return {
            avatar: {
                path: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
                width: 150,
                height: 150
            }
        }
    },
    components: { AvatarComponent },


}
</script>

<style scoped>
    .infor-student{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

</style>