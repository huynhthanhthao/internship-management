<template>
<div class="modal modal-view-progress animate__fadeIn animate__animated d-block"  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Tiến độ thực tập</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModalInfor"></button>
            </div>
            <div class="modal-body">
                <div class="modal-body__infor row">
                    <div class="col-6 my-1">
                        <strong>MSSV: </strong> B1906570
                    </div>
                    <div class="col-6 my-1">
                        <strong>Họ và tên: </strong> Huỳnh Thanh Thảo
                    </div>
                    <div class="col-12 my-1">
                        <strong>Email: </strong> thaoB1906758@student.ctu.edu.vn
                    </div>
                    <div class="col-12 my-1">
                        <strong>Đơn vị thực tập: </strong> Công ty TNHH MTV An Toàn Khu
                    </div>
                </div>
                <div class="modal-body__content">

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeModalInfor">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "TeacherViewProgress",
    methods:{
        closeModalInfor(){
            history.back();
        }
    }
}
</script>
<style>
    .modal{
        background-color: rgba(91, 88, 88, 0.436);
    }
</style>