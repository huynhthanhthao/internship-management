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
      [...typeItems].forEach(classItem => {
        classItem.classList.remove("active");
      })
      event.target.classList.add("active");
      const classItemLeft = event.target.offsetLeft;
      const scrollPosition = classItemLeft / 1.8;
      classList.scroll(scrollPosition, 0);
      if (classList.scrollLeft > 0) {
        classPrev.classList.remove("is-hidden");
      } else {
        classPrev.classList.add("is-hidden");
      }

      if (classList.scrollLeft >= scrollWidthClassList) {
        classNext.classList.add("is-hidden");
      }
      else {
        classNext.classList.remove("is-hidden");
      }
    }

    classNext.addEventListener("click", function () {
      classList.scrollLeft += gapScrollClick;
      classPrev.classList.remove("is-hidden");
      if (classList.scrollLeft >= scrollWidthClassList) {
        this.classList.add("is-hidden");
      }

    })

    classPrev.addEventListener("click", function () {
      classList.scrollLeft -= gapScrollClick;
      classNext.classList.remove("is-hidden");
      if (classList.scrollLeft <= 0) {
        this.classList.add("is-hidden");
      }
    })
  }
}
</script>

<style>

</style>