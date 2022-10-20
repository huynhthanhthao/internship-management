<template>
    <div>
        <div class="d-flex">
            <h2
                class="header-list label m-0 p-2 pt-3 fw-bold col-6"
                style="color: #555555"
            >
                Danh sách sinh viên đang quản lý
                <div class="line mt-3 mb-2"></div>
            </h2>
        </div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#"
                            >DI1996A2</a
                        >
                        <a class="nav-link" href="#">DI1996A3</a>
                        <a class="nav-link" href="#">DI1996A4</a>
                        <a class="nav-link" href="#">DI1996A5</a>
                    </div>
                </div>
            </div>
        </nav>

        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Điện thoại</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>

            <tbody style="overflow-y: scroll">
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "StudentsList",
};
</script>

<style></style>
