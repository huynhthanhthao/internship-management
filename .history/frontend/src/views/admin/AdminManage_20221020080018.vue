<template>
  <div class="admin-manage">
    <TitleStructure :title="`Danh sách tài khoản`"></TitleStructure>
    <div class="type-account col-12 d-flex justify-content-center">
      <div class="type__item ">Tài khoản giảng viên</div>
      <div class="type__item ">Tài khoản sinh viên</div>
      <div class="type__item ">Tài khoản đơn vị thực tập</div>
    </div>
    <div class="list-account mt-5">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Loại tài khoản</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>B1906570</td>
            <td>Huỳnh Thanh Thảo</td>
            <td>Sinh viên</td>
            <td class="text-end">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editInforAccount">
                <i class="bi bi-pencil-square text-warning fs-5"></i>
              </button>
              <button type="button" class="btn">
                <i class="bi bi-archive-fill text-danger fs-5"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>B1906758</td>
            <td>Lê Duy Tân</td>
            <td>Sinh viên</td>
            <td class="text-end">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editInforAccount">
                <i class="bi bi-pencil-square text-warning fs-5"></i>
              </button>
              <button type="button" class="btn">
                <i class="bi bi-archive-fill text-danger fs-5"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <EditInforAccount></EditInforAccount>
  </div>
</template>

<script>
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
import EditInforAccount from '../../components/Admin/ManageAccount/EditInforAccount.vue';
export default {
    name: "AdminManage",
    components: { TitleStructure, EditInforAccount },
    mounted() {
      const typeItems = document.querySelectorAll(".type__item");

      [...typeItems].forEach(function (typeItem) {
        typeItem.addEventListener("click", handleBorderItem);
      });

      function handleBorderItem(event) {
        [...typeItems].forEach(typeItem => {
          typeItem.classList.remove("active");
        })
        event.target.classList.add("active");
      }
    },
}
</script>

<style scoped>
  .type__item {
      padding: 5px 10px;
      font-size: 16px;
      cursor: pointer;
      border-bottom: 2px solid rgba(64, 68, 162, 0.25);
    }
  
  .type__item.active {
      transition: border-bottom 0.5s linear;
      border-bottom-color: #2f2fe6;
    }
</style>