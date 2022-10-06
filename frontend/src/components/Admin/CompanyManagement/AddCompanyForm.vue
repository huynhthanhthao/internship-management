<template>
    <div
        class="modal fade"
        id="AddCompanyForm"
        tabindex="-1"
        aria-labelledby="AddCompanyForm"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold" id="exampleModalLabel">
                        Thêm đơn vị thực tập mới
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="company-name" class="col-form-label"
                                >Tên đơn vị:</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="company-name"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="user-name" class="col-form-label"
                                >Tên đăng nhập:</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="user-name"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="col-form-label"
                                >Mật khẩu:</label
                            >
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                            />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddCompanyForm",
};
</script>

<style></style>
