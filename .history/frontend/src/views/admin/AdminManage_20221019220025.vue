<template>
  <div class="admin-manage">
    <TitleStructure :title="`Danh sách tài khoản`"></TitleStructure>
    <div class="type-account col-12 d-flex">
      <div class="classes__item col-3">Tài khoản giảng viên</div>
      <div class="classes__item col-3">Tài khoản sinh viên</div>
      <div class="classes__item col-3">Tài khoản đơn vị thực tập</div>
    </div>
  </div>
</template>

<script>
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
export default {
    name: "AdminManage",
    components: { TitleStructure },
}
</script>

<style>

</style>