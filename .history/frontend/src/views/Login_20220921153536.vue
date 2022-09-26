<template>
  <div class="login py-5 col-sm-8 m-auto d-flex flex-column align-items-center">
    <h2 class="login__title fs-3 fw-semibold">Chào mừng đến với CTU M-INTERNSHIP</h2>
    <form class="login__form col-sm-6 mt-5">
        <div class="mb-3">
          <label for="login__name" class="form-label">Tên đăng nhập</label>
          <input type="text" class="form-control" id="login__name">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <div class="form__footer d-flex justify-content-around">
            <div class="form__footer-remember">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Nhớ tôi</label>
            </div>
            <div class="form__footer-forgot">
                <a href="#" class="forgot__link">Quên mật khẩu</a>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
    name: "LoginComponent"
}
</script>

<style>

</style>