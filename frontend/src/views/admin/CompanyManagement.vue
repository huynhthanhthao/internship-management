<template>
    <div>
        <div
            class="company-management row p-4 animate__fadeIn animate__animated position-relative"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Danh sách các đơn vị
                        <div class="line my-3"></div>
                    </h2>
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Thông tin chi tiết
                        <div class="line my-3"></div>
                    </h2>
                </div>
            </div>
            <div class="col-6">
                <div
                    class="accordion"
                    style="height: 500px; overflow-y: scroll"
                >
                    <CompanyItem class="mb-2" />
                </div>
                <div class="footer-list w-100 text-center mt-3">
                    <button
                        type="button"
                        class="btn btn-outline-success"
                        data-bs-toggle="modal"
                        data-bs-target="#AddCompanyForm"
                    >
                        <i class="bi bi-plus-circle-fill"></i> Thêm đơn vị
                    </button>
                </div>
            </div>

            <div class="col-6">
                <CompanyDetail v-if="isShowDetail" />
                <Statistics v-else />
            </div>
        </div>

        <!-- Modal -->
        <ConfirmDelCompany
            id="ConfirmDeleteCompany"
            message="Bạn có chắc xóa đơn vị này không?"
        >
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Đóng
            </button>
            <button type="button" class="btn btn-primary">Xác nhận</button>
        </ConfirmDelCompany>

        <UpdateInforForm />
        <AddCompanyForm />
    </div>
</template>

<script>
import CompanyItem from "../../components/Admin/CompanyManagement/CompanyItem.vue";
import CompanyDetail from "../../components/Admin/CompanyManagement/CompanyDetail.vue";
import Statistics from "../../components/Admin/CompanyManagement/Statistics.vue";
import ConfirmDelCompany from "../../components/Modal/Modal.vue";
import UpdateInforForm from "../../components/Admin/CompanyManagement/UpdateInforForm.vue";
import AddCompanyForm from "../../components/Admin/CompanyManagement/AddCompanyForm.vue";

import { mapGetters } from "vuex";
export default {
    name: "CompanyManagement",
    components: {
        CompanyDetail,
        CompanyItem,
        Statistics,
        ConfirmDelCompany,
        UpdateInforForm,
        AddCompanyForm,
    },
    computed: mapGetters({ isShowDetail: "getShowDetailRegister" }),
};
</script>

<style></style>
