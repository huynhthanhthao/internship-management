<template>
<div class="modal modal-view-progress fadeIn d-block"  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click=history.back()"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "TeacherViewProgress",
    // methods:{
    //     closeModalInfor(){
    //         const modalProgress = document.querySelector(".modal-view-progress");
    //         modalProgress.classList.remove("d-block");
    //         history.back();
    //     }
    // }
}
</script>
<style>
    .modal{
        background-color: rgba(91, 88, 88, 0.436);
    }
</style>