<template>
    <div class="header bg-white">
        <div class="app-introduce p-3 d-flex align-items-center">
            <img src="/logo.png" alt="logo" style="width: 80px; height: 80px" />
            <div class="app-name ms-3">
                <h2
                    class="d-flex align-items-center fw-bold p-0 m-0"
                    style="color: #00b0f0"
                >
                    <p class="m-0" style="color: #1f5caa">CTU&nbsp;</p>
                    <p class="m-0">M-INTERSHIP</p>
                </h2>
                <h5 style="color: #595959">
                    Hệ thống quản lý sinh viên thực tập thực tế
                </h5>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                                >Home</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavbarComponent",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@800&display=swap");
.navbar {
    background-color: #3a454b !important;
}

.header {
    border-top: 4px solid #1c57a5;
}

.app-name {
    font-family: "Noto Sans", sans-serif;
}
</style>
