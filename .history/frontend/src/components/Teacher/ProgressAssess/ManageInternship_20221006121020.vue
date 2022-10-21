<template>
<div class="manage-internship">
    <div class="manage__title col-12 me-4 m-0 p-2 pt-4">
        <h2 class="label fw-bold" style="color: #555555">
            Quản lý thực tập
        </h2>
        <div class="line my-3"></div>
    </div>
    <div class="manage__content">
        <ViewProgress/>
    </div>
</div>
</template>

<script>
import ViewProgress from '@/components/GlobalComponent/ViewProgress.vue';
export default {
    components: { ViewProgress }
}
</script>

<style>

</style>