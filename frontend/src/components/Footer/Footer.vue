<template>
    <footer
        class="footer d-flex align-items-center justify-content-between px-3"
    >
        <!-- Copyright -->
        <div class="text-center text-dark p-3">
            © 2022 Copyright:
            <a class="text-dark" href="https://mdbootstrap.com/">Fat team</a>
        </div>
        <!-- Contact -->
        <div class="contact d-flex">
            <div class="email me-3">
                <i class="bi bi-envelope-fill"></i>
                fat.admin@gmail.com
            </div>
            <div class="facebook">
                <i class="bi bi-facebook"></i>
                fb.com/CTUDHCT
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
};
</script>

<style>
.footer {
    background-color: rgb(160, 160, 160);
}
</style>
