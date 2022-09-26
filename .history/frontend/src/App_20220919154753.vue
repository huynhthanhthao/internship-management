<template>
    <div id="app">
        <Navbar />
        <Content />
        <Footer />
    </div>
</template>

<script>
import Footer from "./components/Footer/Footer.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Content from "./components/Content/Content.vue";

export default {
    name: "App",
    components: { Footer, Navbar, Content },
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 90%;
    max-width: 1500px;
    margin: 0 auto
}
</style>
