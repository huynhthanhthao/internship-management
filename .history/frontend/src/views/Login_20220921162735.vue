<template>
  <div>
    <Header/>
  <div class="login py-5 col-sm-8 m-auto d-flex flex-column align-items-center">
    <h2 class="login__title fs-2 fw-semibold" style="color:#555">Chào mừng đến với <span style="color: #1f5cca">CTU</span> <span style="color: #00b0f0">M-INTERNSHIP</span> !</h2>
    <form class="login__form col-sm-6 mt-5 p-5 rounded-5">
        <div class="mb-3">
          <label for="login__name" class="form-label">Tên đăng nhập</label>
          <input type="text" class="form-control" id="login__name">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary d-flex m-auto mt-5">Đăng nhập</button>
      </form>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
export default {
    name: "LoginComponent",
    components: { Header }
}
</script>

<style>
    .login__form{
        box-shadow: #1f5bca62 0px 2px 8px 0px;
    }
    .forgot__link{
        text-decoration: none;
    }
</style>