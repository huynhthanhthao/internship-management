<template>
    <div class="modal fade" id="createAccount" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">Thêm tài khoản</h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" class="row col-12  p-0 my-3 mx-2">
                        <div class="avatar col-5 d-flex flex-column align-items-center ps-0 ">
                            <AvatarComponent :avatar="avatar" class="col-12" />
                            <input type="text" id="fullName" class="fullName col-9 text-center fs-5 fw-bold mt-3"
                                placeholder="Tên đầy đủ">
                        </div>
                        <div class="infor col-6">
                            <div class="mb-3 row">
                                <label for="inputUsername"
                                    class="col-3 col-form-label px-0"><strong>Username:</strong></label>
                                <div class="col-9">
                                    <input type="text" class="form-control" id="inputUsername" name="username">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword"
                                    class="col-3 col-form-label px-0"><strong>Password:</strong></label>
                                <div class="col-9">
                                    <input type="text" class="form-control" id="inputPassword" name="password">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputTypeAccount" class="col-3 col-form-label px-0"><strong>Tài
                                        khoản:</strong></label>
                                <div class="col-9">
                                    <select class="form-select select-type-account" aria-label="Select Type Account" id="inputTypeAccount" name="typeAccount" @change="selectTypeAccount($event)">
                                        <option selected>Chọn loại tài khoản</option>
                                        <option value="TEACHER">Giảng viên</option>
                                        <option value="STUDENT">Sinh viên</option>
                                        <option value="COMPANY">Đơn vị thực tập</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3 row student-class d-none">
                                <label for="inputClass" class="col-3 col-form-label px-0"><strong>Lớp:</strong></label>
                                <div class="col-9">
                                    <input type="text" class="form-control" id="inputClass" name="studentClass">
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
    name: "CreateAccount",
    data() {
        return {
            avatar: {
                path: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
                height: 160,
                width: 160,
            }
        };
    },
    components: { AvatarComponent },
    methods:{
        selectTypeAccount(event){
            const type = event.target.value;
            const studentClass = document.querySelector(".student-class");
            if (type=="STUDENT"){
                studentClass.classList.remove("d-none");
            }
            else{
                if (!studentClass.classList.contains("d-none"))
                    studentClass.classList.add("d-none");
            }
        }
    }
}
</script>

<style scoped>
.modal-header{
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