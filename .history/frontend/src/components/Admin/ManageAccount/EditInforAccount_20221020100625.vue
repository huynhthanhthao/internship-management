<template>
<div class="modal fade" id="editInforAccount" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header text-white">
                <h1 class="modal-title fs-5 fw-bold" id="modalLabel">Cập nhật thông tin tài khoản</h1>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" class="row col-12  p-0 my-3 mx-2">
                    <div class="avatar col-5 d-flex flex-column align-items-center ps-0 ">
                        <AvatarComponent :avatar="avatar" class="col-12" />
                        <input type="text" id="fullName" class="fullName col-9 text-center fs-5 fw-bold mt-3" value="Nguyen Thanh Thanh">
                    </div>
                    <div class="infor col-6">
                        <div class="mb-3 row">
                            <label for="inputUsername" class="col-3 col-form-label px-0"><strong>Username:</strong></label>
                            <div class="col-9">
                                <input type="text" class="form-control" id="inputUsername">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputEmail" class="col-3 col-form-label px-0"><strong>Email:</strong></label>
                            <div class="col-9">
                                <input type="email" class="form-control" id="inputEmail">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPhone" class="col-3 col-form-label px-0"><strong>Điện thoại:</strong></label>
                            <div class="col-9">
                                <input type="text" class="form-control" id="inputPhone">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputTypeAccount" class="col-3 col-form-label px-0"><strong>Tài khoản:</strong></label>
                            <div class="col-9">
                                <select class="form-select select-type-account" aria-label="Select Type Account" id="inputTypeAccount"  @change="selectTypeAccount($event)" >
                                    <option selected>Chọn loại tài khoản</option>
                                    <option value="1">Giảng viên</option>
                                    <option value="2">Sinh viên</option>
                                    <option value="3">Đơn vị thực tập</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3 row student-class-update d-none">
                            <label for="inputClass" class="col-3 col-form-label px-0"><strong>Lớp:</strong></label>
                            <div class="col-9">
                                <input type="text" class="form-control" id="inputClass">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary">Lưu thay đổi</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import AvatarComponent from '@/components/GlobalComponent/AvatarComponent.vue';
export default {
    name: "EditInforAccount",
    data() {
        return {
            avatar: {
                path: "https://images.unsplash.com/photo-1664745027113-0145831af78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80",
                height: 160,
                width: 160,
            }
        };
    },
    components: { AvatarComponent },
    methods:{
        selectTypeAccount(event) {
            const type = event.target.value;
            const studentClass = document.querySelector(".student-class-update");
            if (type == 2) {
                studentClass.classList.remove("d-none");
            }
            else {
                if (!studentClass.classList.contains("d-none"))
                    studentClass.classList.add("d-none");
            }
        }
    }
}
</script>

<style scoped>
.modal-header {
    background-color: #1f5caa;
}
    .fullName {
        outline: 0;
        border-width: 0 0 2px;
        border-color: blue;
    }
    
    .fullName:focus {
        border-color: green
    }
</style>