<template>
    <div>
        <div class="d-flex">
            <h2
                class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                style="color: #555555"
            >
                Danh sách sinh viên đang quản lý
                <div class="line my-3"></div>
            </h2>
        </div>
        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Điện thoại</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
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
