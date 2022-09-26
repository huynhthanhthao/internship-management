<template>
    <div class="teacher row m-0 p-0">
        <div class="teacher-home col-3 m-auto">
            <router-link to="/">
                <button type="button" class="btn btn-primary">Primary</button>
            </router-link>
            <router-link to="/">
                <button type="button" class="btn btn-primary">Primary</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeacherComponent",
};
</script>

<style>
    .teacher {
        width: 100%;
        height: 100%;
    }
</style>
