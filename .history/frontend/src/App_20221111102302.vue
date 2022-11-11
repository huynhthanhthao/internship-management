<template>
    <div id="app" class="container mt-4 shadow-sm bg-body p-0 rounded">
        <Content />
        <Footer />
    </div>
</template>

<script>
// import axios from "axios";
// import config from "@/config/index.js";
import Footer from "./components/Footer/Footer.vue";
import Content from "./components/Content/Content.vue";

export default {
    name: "App",
    components: { Footer, Content },
    created() {
        this.$store.dispatch("setAccount");
    },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
#app {
    font-family: "Noto Sans", sans-serif;
    box-sizing: border-box;
    background-image: url("https://elearning.ctu.edu.vn/pluginfile.php/1/theme_lambda/pagebackground/1662695177/CTU_Blank_white.png");
}
</style>
