<template>
    <div>
        <div class="d-flex">
            <div class="header-list m-0 p-2 pt-3 col-6" style="color: #555555">
                <div class="d-flex">
                    <h2 class="me-3 fw-bold">
                        Danh sách sinh viên đang quản lý
                    </h2>
                    <StudentFilter />
                </div>
                <div class="line mt-3 mb-2"></div>
            </div>
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
import StudentFilter from "@/components/StudentFilter/StudentFilter.vue";
export default {
    name: "StudentsList",
    components: { StudentFilter },
};
</script>

<style></style>
