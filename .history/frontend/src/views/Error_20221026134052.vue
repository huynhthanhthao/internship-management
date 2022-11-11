<template>
    <div>
        <Header />
        <div class="error text-center">
            <img
                src="https://cdn-icons-png.flaticon.com/512/1698/1698599.png"
                style="width: 400px"
            />
            <h3 class="fw-bold text-danger">Không tìm thấy trang.</h3>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
export default {
    name: "ErrorComponent",
    components: { Header },
};
</script>

<style></style>
