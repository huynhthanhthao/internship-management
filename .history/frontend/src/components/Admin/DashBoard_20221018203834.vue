<template>
  <div class="dashboard row">
    <div class="dashboard-item col-12 d-flex justify-content-center">
        <div class="dashboard-overview col-3 m-4">
            <p class="item__name">Tổng số tài khoản</p>
            <h3 class="item__quantity">100</h3>
            <img src="https://cdn-icons-png.flaticon.com/512/681/681392.png" alt="" class="dashboard__img">
        </div>
    </div>
   <div class="dashboard__item col-12 d-flex">
    <div class="dashboard-detail col-3 m-4">
        <p class="item__name">Tài khoản giảng viên</p>
        <h3 class="item__quantity">100</h3>
        <img src="https://cdn-icons-png.flaticon.com/512/3373/3373452.png" alt="" class="dashboard__img">
    </div>
    <div class="dashboard-detail col-3 m-4">
        <p class="item__name">Tài khoản sinh viên</p>
        <h3 class="item__quantity">100</h3>
        <img src="https://cdn-icons-png.flaticon.com/512/2103/2103305.png" alt="" class="dashboard__img">
    </div>
    <div class="dashboard-detail col-3 m-4">
        <p class="item__name">Tài khoản đơn vị thực tập</p>
        <h3 class="item__quantity">100</h3>
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
    .dashboard__img{
        width: 30%;
        height: 40%;
    }
</style>