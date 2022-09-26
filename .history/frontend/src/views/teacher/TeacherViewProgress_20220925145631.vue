<template>
<div class="modal-infor fade position-fixed w-100 h-100">
    <h1>Hi</h1>
</div>
</template>

<script>
export default {
    name: "TeacherViewProgress"
}
</script>

<style>
.modal-infor{
        position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 999999;
            background-color: rgba(0, 0, 0, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 20px;
            cursor: zoom-out;
    }
</style>