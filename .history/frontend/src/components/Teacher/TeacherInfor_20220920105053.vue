<template>
    <div class="position-absolute top-40 p-0">
        <a class="btn btn-primary rounded-5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <i class="bi bi-info-circle-fill"></i>
        </a>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Thông tin cá nhân</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="offcanvas-avatar rounded-circle m-auto ps-0"></div>
                <h3 class="offcanvas-name  text-center mt-2">Le Duy Tan</h3>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeacherInforComponent"
}
</script>

<style>
    .teacher-infor{
        border-end-end-radius: 50px;
        border-start-end-radius: 50px;
        box-shadow: rgba(68, 68, 68, 0.2) 0px 10px 20px 20px;
    }
    .offcanvas-avatar{
        background:url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center  / cover;
        height: 200px;
        width: 200px;
    }
</style>