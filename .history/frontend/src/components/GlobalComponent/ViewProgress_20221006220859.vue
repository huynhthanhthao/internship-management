<template>
<div class="view-progress my-4 animate__animated animate__fadeIn">
    <div class="view-progress__content mb-3">
        <div class="view-progress__title col-6 me-5 ">
            <h2 class="header-list label m-0 p-2 pt-2 fw-bold" style="color: #555555">
                Thông tin tiến độ thực tập
            </h2>
            <div class="line my-3"></div>
        </div>
        <div class="view-progress__detail my-4 ">
            <p class="view-progress__date"><strong>Thời gian thực tập:</strong> từ ngày 19-05-2022 đến 20-07-2022</p>
            <p class="view-progress__status"><strong>Trạng thái hoàn thành:</strong> <span style="color: red">Chưa hoàn thành thực tập</span></p>
        </div>
        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: 25%"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
            </div>
        </div>
        <slot></slot>
    </div>
    <div class="table-progress border rounded-4 p-3">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" style="width: 5%">Tuần</th>
                    <th scope="col" style="width: 37%">Nội dung công việc</th>
                    <th scope="col" style="width: 8%">Số giờ</th>
                    <th scope="col" style="width: 50%">Nhận xét</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Học tập quy trình làm việc và các thư viện mà đơn vị sử dụng</td>
                    <td>24</td>
                    <td>Khả năng tiếp thu nhanh. Nhanh nhẹn, linh hoạt, kiến thức chuyên môn tốt và hòan thành tốt công việc
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Học tập quy trình làm việc và các thư viện mà đơn vị sử dụng</td>
                    <td>24</td>
                    <td>Khả năng tiếp thu nhanh. Nhanh nhẹn, linh hoạt, kiến thức chuyên môn tốt và hòan thành tốt công việc
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Học tập quy trình làm việc và các thư viện mà đơn vị sử dụng</td>
                    <td>24</td>
                    <td>Khả năng tiếp thu nhanh. Nhanh nhẹn, linh hoạt, kiến thức chuyên môn tốt và hòan thành tốt công việc
                    </td>
                </tr>
            </tbody>
        </table>
    </div>  
</div> 
</template>

<script>
export default {
    name: "ViewProgress",
}
</script>

<style scoped>
    .view-progress__title{
        max-width: 48%;
    }

    .table-progress{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

</style>