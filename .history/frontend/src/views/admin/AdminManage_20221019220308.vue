<template>
  <div class="admin-manage">
    <TitleStructure :title="`Danh sách tài khoản`"></TitleStructure>
    <div class="type-account col-12 d-flex justify-content-center">
      <div class="type__item col-2">Tài khoản giảng viên</div>
      <div class="type__item col-2">Tài khoản sinh viên</div>
      <div class="type__item col-2">Tài khoản đơn vị thực tập</div>
    </div>
  </div>
</template>

<script>
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
export default {
    name: "AdminManage",
    components: { TitleStructure },
  mounted() {
    const typeItems = document.querySelectorAll(".classes__item");

    [...typeItems].forEach(function (typeItem) {
      typeItem.addEventListener("click", handleBorderItem);
    });

    function handleBorderItem(event) {
      [...typeItems].forEach(typeItem => {
        typeItem.classList.remove("active");
      })
      event.target.classList.add("active");
    }
  }
}
</script>

<style scoped>

</style>