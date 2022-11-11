<template>
    <div class="filter-student d-flex align-items-center" data-backdrop="false">
        <div
            class="modal fade"
            id="StudentFilter"
            tabindex="-1"
            aria-labelledby="StudentFilterLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1
                            class="modal-title fs-4 fw-bold"
                            id="StudentFilterLabel"
                        >
                            Bộ Lọc Sinh Viên
                        </h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="class" class="form-label"
                                >Chọn lớp</label
                            >
                            <select
                                id="class"
                                class="form-select"
                                aria-label="Default select example"
                            >
                                <option selected>Tất cả</option>
                                <option value="DI1996A1">DI1996A1</option>
                                <option value="DI1996A2">DI1996A2</option>
                                <option value="DI1996A3">DI1996A3</option>
                                <option value="DI1996A4">DI1996A4</option>
                                <option value="DI1996A5">DI1996A5</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="semester" class="form-label"
                                >Học kỳ</label
                            >
                            <select
                                id="semester"
                                class="form-select"
                                aria-label="Default select example"
                            >
                                <option selected>Tất cả</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">Hè</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="year" class="form-label">Năm học</label>
                            <select
                                id="year"
                                class="form-select"
                                aria-label="Default select example"
                            >
                                <option selected>Tất cả</option>
                                <option value="2019-2020">2019-2020</option>
                                <option value="2020-2021">2020-2021</option>
                                <option value="2021-2022">2021-2022</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Đóng
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                        >
                            Lọc
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StudentFilter",
};
</script>

<style>
.filter-icon:hover {
    cursor: pointer;
    opacity: 0.8;
}
.filter-icon {
    width: 30px;
    height: 30px;
}
</style>
