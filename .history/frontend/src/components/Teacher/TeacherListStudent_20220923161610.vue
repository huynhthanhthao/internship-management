<template>
    <div class="student-list">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button
                        class="accordion-button p-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
                            alt=""
                            class="me-2"
                            style="width: 30px"
                        />Huynh Thanh Thao
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div class="accordion-body row">
                        <div class="col-6">
                            <strong>Họ và tên: </strong> Huynh Thanh Thao
                        </div>
                        <div class="col-6">
                            <strong>Email: </strong> htthao@gmail.com
                        </div>
                        <div class="col-6">
                            <strong>Điện thoại: </strong> 0355219791
                        </div>
                        <div class="col-6">
                            <strong>Đơn vị: </strong> CT TNHH MTV An Toàn Khu
                        </div>
                        <div class="col-6 d-flex justify-content-center mt-4">
                            <button
                                type="button"
                                class="btn btn-outline-secondary p-2"
                                style="font-size: 15px"
                                @click="showDetailStudent"
                            >
                                Xem chi tiết
                            </button>
                        </div>
                        <div class="col-6 d-flex justify-content-center mt-4">
                            <button
                                type="button"
                                class="btn btn-outline-secondary p-2"
                                style="font-size: 15px"
                                @click="showDetail"
                            >
                                Đánh giá kết quả thực tập
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
name: "TeacherListStudent",
computed: {
    
},
methods: {
    ...mapMutations({
        showDetailStudent : "SHOW_DETAIL_STUDENT",
        closeDetailStudent: "CLOSE_DETAIL_STUDENT"
    }),
}
}
</script>

<style>

</style>