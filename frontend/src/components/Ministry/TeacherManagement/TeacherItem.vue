<template>
    <div class="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3650/3650049.png"
                        alt=""
                        class="me-2"
                        style="width: 30px"
                    />Huynh Thanh Thao
                </button>
            </h2>
            <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
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
                    <div class="col-12 d-flex justify-content-center mt-2">
                        <button
                            type="button"
                            class="btn btn-outline-secondary p-2"
                            style="font-size: 15px"
                            @click="showDetail"
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "TeacherItem",
    methods: mapMutations({
        showDetail: "SHOW_DETAIL_REGISTER",
    }),
};
</script>

<style></style>
