<template>
    <div class="modal fade " id="sendRegister" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">Thông tin đăng ký thực tập</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body ps-0">
                    <form action="" class="row col-12  p-0 my-3 mx-2">
                        <div class="avatar col-4 d-flex flex-column align-items-center ps-0">
                            <AvatarComponent :avatar="{path: student.urlAvatar, height: 200, width: 200}" class="col-12"/>
                            <h3 class="col-10 text-center fw-bold mt-3" style="color:#1f5caa">{{student.name}}</h3>
                        </div>
                        <div class="infor col-8">
                            <div class="mb-3 row">
                                <span class="col-3 px-0"><strong>Email: </strong></span>
                                <span class="col-6">{{ student.email }}</span>
                            </div>
                            <div class="mb-3 row">
                                <span class="col-3 px-0"><strong>Số điện thoại: </strong></span>
                                <span class="col-6">{{ student.phoneNumber }}</span>
                                <label for="inputGPA" class="col-1 col-form-label px-0 ms-auto"><strong>GPA:</strong></label>
                                <div class="col-2">
                                    <input type="text" class="form-control" id="inputGPA" v-model="gpa">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputLanguage" class="col-3 col-form-label px-0"><strong>Ngôn ngữ:</strong></label>
                                <div class="col-9">
                                    <input type="text" class="form-control" id="inputLanguage" v-model="languages">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="textareaProject" class="col-3 col-form-label px-0"><strong>Dự án:</strong></label>
                                <div class="col-9">
                                    <textarea class="form-control" id="textareaProject" v-model="projects"></textarea>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="textareaProject" class="col-3 col-form-label px-0"><strong>Thông điệp:</strong></label>
                                <div class="col-9">
                                    <textarea class="form-control" id="textareaProject" v-model="message"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="sendRegister">Gửi</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AvatarComponent from '@/components/GlobalComponent/AvatarComponent.vue';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import config from '@/config';
export default {
    name: "SendRegister",
    data(){
        return{
            gpa: "",
            languages: "",
            projects: "",
            message: ""

        }
    },
    computed:{
        ...mapGetters({student: "getAccount", company: "getCompanyDetail"}),
    },
    methods: {
        ...mapActions(["setAccount"]),
         async sendRegister(){
            this.gpa = this.gpa.replace(",", ".");
            let gpa = isNaN(parseFloat(this.gpa)) ? 0 : parseFloat(this.gpa);
            const token = localStorage.getItem("token");
            const response = await axios.post(
                `${config.domain}/student/register-company`,
                { 
                    studentId: this.student.id, 
                    companyId: this.company.id, 
                    gpa, 
                    languages: this.languages, 
                    projects: this.projects,
                    message: this.message 
                },
                {
                    headers: { Authorization: "Bearer " + token },
                }
             );
             this.$store.dispatch("setToast", {isSuccess: true, message: response.data.message})
        }
    },
    created(){
        this.setAccount();
    },
    components: { AvatarComponent }
}
</script>

<style>

</style>