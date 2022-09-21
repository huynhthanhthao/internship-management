<template>
    <div class="header bg-white">
        <IntroduceApp />
        <Navbar :rule="rule" />
    </div>
</template>

<script>
import IntroduceApp from "./IntroduceApp.vue";
import Navbar from "./Navbar.vue";

export default {
    name: "HeaderComponent",
    components: { IntroduceApp, Navbar },
    props: ["rule"],
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@800&display=swap");

.header {
    border-top: 4px solid #1c57a5;
}
</style>
