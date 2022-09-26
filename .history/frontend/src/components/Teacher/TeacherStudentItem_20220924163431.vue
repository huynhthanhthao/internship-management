<template>
  <div class="accordion mb-3" :id="`accordion${id}`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`heading${id}`">
                    <button
                        class="accordion-button collapsed p-3"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="`#collapse${id}`"
                        aria-expanded="false"
                        :aria-controls="`collapse${id}`"
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
                    :id="`collapse${id}`"
                    class="accordion-collapse collapse"
                    :aria-labelledby="`heading${id}`"
                    :data-bs-parent="`#accordion${id}`"
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
                                class="btn btn-outline-secondary p-2 animate__fadeIn animate__animated"
                                style="font-size: 15px"
                                @click="showDetailInfor(`Thông tin chi tiết`)"
                            >
                                Xem chi tiết
                            </button>
                        </div>
                        <div class="col-6 d-flex justify-content-center mt-4">
                            <button
                                type="button"
                                class="btn btn-outline-secondary p-2"
                                style="font-size: 15px"
                                @click="showDetailInfor(`Đánh giá kết quả thực tập`)"
                            >
                                Đánh giá kết quả thực tập
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name : "TeacherStudentItem", 
    props:{
        id: {
            type: String
        }
    },
    methods: {
        ...mapMutations({
            showDetail: "SHOW_DETAIL_STUDENT",
            closeDetail: "CLOSE_DETAIL_STUDENT"
        }),
        showDetailInfor(title){
            const headerList = document.querySelectorAll(".header-list");
            headerList[1].innerText = title;
            this.showDetail();
        }
    },
}
</script>

<style>

</style>