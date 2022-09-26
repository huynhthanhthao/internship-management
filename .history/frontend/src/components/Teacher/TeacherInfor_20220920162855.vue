<template>
    <div class="position-absolute top-40 p-0">
        <a class="btn btn-primary rounded-5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <i class="bi bi-info-circle-fill"></i>
        </a>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

            <div class="offcanvas-header text-white">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Thông tin cá nhân</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body mt-5">

                <div class="teacher-infor-avatar rounded-circle m-auto ps-0"></div>
                <h3 class="teacher-infor-name text-center mt-3">Le Duy Tan</h3>

                <ul class="teacher-infor-detail fs-6 mt-5 ps-0">
                    <li class="teacher-infor-item mb-2">
                        <span class="item__title me-3">
                            <i class="bi bi-person-circle"></i>
                        </span>
                        <span class="item__value">B1906758</span>
                    </li>
                    <li class="teacher-infor-item mb-2">
                        <span class="item__title me-3">
                            <i class="bi bi-envelope-fill"></i>
                        </span>
                        <span class="item__value">tanb1906758@student.ctu.edu.vn</span>
                    </li>
                    <li class="teacher-infor-item mb-2">
                        <span class="item__title me-3">
                            <i class="bi bi-phone-fill"></i>
                        </span>
                        <span class="item__value">0939382623</span>
                    </li>
                </ul>

                <button class="btn btn-primary rounded-pill mt-5 d-flex m-auto" @click="showUpdate">Cập nhật thông tin</button>

            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: "TeacherInforComponent",
    computed : {
        ...mapMutations(["SHOW_UPDATE"])
    },
    methods: {
        showUpdate(){
            const modal = document.querySelector(".offcanvas.backdrop");

            console.log(modal.previousElementSibling.classList.remove("offcanvas.show:not(.hiding)"););
            // modal.parentElement.removeChild(modal);
            // this.SHOW_UPDATE;
            // console.log(modal);

        }
    },
}
</script>

<style>

    .offcanvas-header{
        background-color: #1f5caa ;
    }
    .teacher-infor-avatar{
        background:url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center  / cover;
        height: 200px;
        width: 200px;
    }

    .teacher-infor-detail{
        list-style-type: none;
    }


</style>