<template>
  <div class="dashboard row">
    <div class="dashboard-item col-12 d-flex justify-content-center">
        <div class="dashboard-detail col-3 m-4 d-flex justify-content-around">
            <div class="dashboard-infor ">
                <p class="item__name mb-1">Tổng số tài khoản</p>
                <h3 class="item__quantity fw-bold">100</h3>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/681/681392.png" alt="" class="dashboard__img">
        </div>
    </div>
   <div class="dashboard__item col-12 d-flex justify-content-center">
    <div class="dashboard-detail col-3 m-4 d-flex justify-content-around">
        <div class="dashboard-infor">
            <p class="item__name mb-1">Tài khoản giảng viên</p>
            <h3 class="item__quantity fw-bold">100</h3>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/3373/3373452.png" alt="" class="dashboard__img">
    </div>
    <div class="dashboard-detail col-3 m-4 d-flex justify-content-around">
       <div class="dashboard-infor ">
        <p class="item__name mb-1">Tài khoản sinh viên</p>
        <h3 class="item__quantity fw-bold">100</h3>
       </div>
        <img src="https://cdn-icons-png.flaticon.com/512/2103/2103305.png" alt="" class="dashboard__img">
    </div>
    <div class="dashboard-detail col-3 m-4 d-flex justify-content-around">
        <div class="dashboard-infor">
            <p class="item__name mb-1">Tài khoản đơn vị thực tập</p>
            <h3 class="item__quantity fw-bold">100</h3>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/993/993854.png" alt="" class="dashboard__img">
    </div>
   </div>  
  </div>
</template>

<script>
export default {
    name: "DashBoard"
}
</script>

<style scoped>
    .dashboard-detail{
        background-color: white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 20px;
        border-radius: 10px;
    }
    .dashboard__img{
        width: 20%;
        height: 80%;
        align-self: center;
    }
</style>