<template>
    <div class="assess-result">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div
            class="modal fade"
            id="AssessResultModal"
            tabindex="-1"
            aria-labelledby="ModalLabel"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered"
                style="min-width: 800px !important"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold" id="ModalLabel">
                            Đánh giá kết quả thực tập
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="table-assess d-flex">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="col-1">STT</th>
                                        <th scope="col" class="col-10">
                                            Nội dung đánh giá
                                        </th>
                                        <th scope="col" class="col-1">Điểm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">I</th>
                                        <td style="font-weight: bold">
                                            Tinh thần kỷ luật
                                        </td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">I.1</th>
                                        <td>
                                            Thực hiện nội quy của cơ quan (nếu
                                            thực tập online thì không chấm điểm)
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">I.2</th>
                                        <td>
                                            Chấp hành giờ giấc làm việc (nếu
                                            thực tập online thì không chấm điểm)
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">I.2</th>
                                        <td>
                                            Chấp hành giờ giấc làm việc (nếu
                                            thực tập online thì không chấm điểm)
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">I.3</th>
                                        <td>
                                            Thái độ giao tiếp với cán bộ trong
                                            đơn vị (nếu thực tập online thì
                                            không chấm điểm)
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">I.4</th>
                                        <td>Tích cực trong công việc</td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">II</th>
                                        <td style="font-weight: bold">
                                            Khả năng chuyên môn, nghiệp vụ
                                        </td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">II.1</th>
                                        <td>Đáp ứng yêu cầu công việc</td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">II.2</th>
                                        <td>
                                            Tinh thần học hỏi, nâng cao trình độ
                                            chuyên môn, nghiệp vụ
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">II.3</th>
                                        <td>
                                            Có đề xuất, sáng kiến, năng động
                                            trong công việc
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">III</th>
                                        <td style="font-weight: bold">
                                            Kết quả công tác
                                        </td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">III.1</th>
                                        <td>
                                            Báo cáo tiến độ công việc cho cán bộ
                                            hướng dẫn mỗi tuần 1 lần
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">III.2</th>
                                        <td>Hoàn thành công việc được giao</td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">III.3</th>
                                        <td>
                                            Kết quả công việc có đóng góp cho cơ
                                            quan nơi thực tập
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="w-100 form-control"
                                            />
                                        </td>
                                    </tr>

                                    <tr class="text-danger">
                                        <td style="font-weight: bold">Tổng</td>
                                        <td></td>

                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <textarea
                                                name=""
                                                id=""
                                                cols="10"
                                                rows="3"
                                                class="form-control"
                                                placeholder="Nhận xét thêm..."
                                            ></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                        <button type="button" class="btn btn-primary">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AssessResult",
};
</script>

<style></style>
