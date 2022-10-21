<template>
    <div class="student w-100 h-100 row m-0">
        <Header class="p-0" rule="student" />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
export default {
    name: "StudentComponent",
    components: { Header }
};
</script>

<style></style>
