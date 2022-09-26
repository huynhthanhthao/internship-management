<template>
    <div class="accordion mb-2" :id="accordionID">
        <div class="accordion-item">
            <h2 class="accordion-header" :id="headingID">
                <button
                    class="accordion-button p-3"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="data1"
                    aria-expanded="true"
                    :aria-controls="id"
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
                :id="id"
                class="accordion-collapse collapse"
                :aria-labelledby="headingID"
                :data-bs-parent="dataParent"
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
                            @click="showDetail"
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
</template>

<script>
export default {
    name: "TeacherStudentItem",
    props: ["id"],
    data(){
        return {
            data1: "#" + this.id,
            headingID: "heading",
            accordionID: "accordion",
            dataParent: "#accordion" + this.id
        }
    },
    computed:{
        data1(){
            return "#" + this.id
        },
        headingID(){
            return "heading" + this.id
        },
        accordionID(){
            return "accordion" + this.id
        },
        dataParent(){
            return "#" + this.accordionID();
        }
    }
}
</script>

<style>

</style>