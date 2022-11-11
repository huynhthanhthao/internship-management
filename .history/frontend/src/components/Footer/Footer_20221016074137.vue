<template>
    <footer
        class="footer d-flex align-items-center justify-content-between px-3"
    >
        <!-- Copyright -->
        <div class="text-center p-3">
            © 2022 Copyright:
            <a
                class="text-dark text-decoration-none"
                target="_blank"
                href="https://facebook.com/"
                >Fat team</a
            >
        </div>
        <!-- Contact -->
        <div class="contact d-flex">
            <div class="email me-3">
                <i class="bi bi-envelope-fill"></i>
                fat.ministry@gmail.com
            </div>
            <a
                class="facebook-fanpage text-decoration-none text-black"
                href="https://www.facebook.com/CTUDHCT/"
                target="_blank"
            >
                <i class="bi bi-facebook"></i>
                fb.com/CTUDHCT
            </a>
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

.facebook-fanpage {
    color: #212529 !important;
}
</style>
