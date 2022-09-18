<template>
    <div class="content">
        <h1>{{ test }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "ContentComponent",
    data() {
        return {
            test: this.$store.state.testModule.test,
        };
    },
};
</script>

<style>
.content {
    height: 80vh;
}
</style>
