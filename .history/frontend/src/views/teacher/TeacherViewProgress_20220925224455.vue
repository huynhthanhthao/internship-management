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
                <div class="modal-body__infor row  border-bottom">
                    <div class="col-4 my-1">
                        <strong>MSSV: </strong> B1906570
                    </div>
                    <div class="col-8 my-1 text-end">
                        <strong>Họ và tên: </strong> Huỳnh Thới Thị Thanh Thảo
                    </div>
                    <div class="col-12 my-1">
                        <strong>Đơn vị thực tập: </strong> Công ty TNHH MTV An Toàn Khu
                    </div>
                    <div class="col-12 my-1">
                        <strong>Thời gian thực tập: </strong> từ ngày <span>19-05-2022</span> đến ngày <span>20-07-2022</span>     
                    </div>
                </div>
                <div class="modal-body__content mt-3">
                    <div class="content-week border rounded-2 row mb-2">
                        <div class="content-week__day col-2">
                            <strong>Tuần 1</strong>
                        </div>
                        <div class="content-week__task col-6 text-justify">
                            Học tập kinh nghiệm và theo dõi quá trình làm việc trong đơn vị
                        </div>
                        <div class="content-week__message col-4">
                            Hoàn thành tốt trong 4 giờ
                        </div>
                    </div>
                    <div class="content-week border rounded-2 row mb-2">
                        <div class="content-week__day col-2">
                            <strong>Tuần 2</strong>
                        </div>
                        <div class="content-week__task col-6 text-justify">
                            Học tập kinh nghiệm và theo dõi quá trình làm việc trong đơn vị
                        </div>
                        <div class="content-week__message col-4">
                            Hoàn thành tốt trong 4 giờ
                        </div>
                    </div>
                    <div class="content-week border rounded-2 row mb-2">
                        <div class="content-week__day col-2">
                            <strong>Tuần 3</strong>
                        </div>
                        <div class="content-week__task col-6 text-justify">
                            Học tập kinh nghiệm và theo dõi quá trình làm việc trong đơn vị
                        </div>
                        <div class="content-week__message col-4">
                            Hoàn thành tốt trong 4 giờ
                        </div>
                    </div>
                    <div class="content-week border rounded-2 row mb-2">
                        <div class="content-week__day col-2">
                            <strong>Tuần 4</strong>
                        </div>
                        <div class="content-week__task col-6 text-justify">
                            Học tập kinh nghiệm và theo dõi quá trình làm việc trong đơn vị
                        </div>
                        <div class="content-week__message col-4">
                            Hoàn thành tốt trong 4 giờ
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeModalInfor">Đóng</button>
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
    .modal-dialog{
        min-width: 576px;
    }
    .modal-body__infor{
        margin-left:-16px;
        margin-right: -16px;
        border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
    }
    .col-*{
        padding-left: 6px;
        padding-right: 6px;
    }
</style>