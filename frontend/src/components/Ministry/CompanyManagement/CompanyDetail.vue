<template>
    <div class="teacher-detail">
        <div
            class="information-detail position-relative border rounded-2 py-4 row col-12 animate__fadeIn animate__animated"
        >
            <button
                type="button"
                class="btn-close position-absolute"
                aria-label="Close"
                @click="closeDetail"
            ></button>
            <div
                class="col-5 d-flex justify-content-center"
                style="height: 180px; width: 200px"
            >
                <img
                    src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBelU3RHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f9e8471fd1ae553364e9ee7d8cd34d50ea9fdd35/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ee4e4854f68df0a745312d63f6c2782b5da346cd/axon-logo.png"
                    alt=""
                    style="height: 100%; width: 100%"
                />
            </div>
            <div class="col-7 flex-grow-1" style="min-height: 200px">
                <div class="col-12 my-1">
                    <strong>Tên đơn vị: </strong> Axon Active
                </div>
                <div class="col-12 my-1">
                    <strong>Email: </strong> axonacitve@gmail.vn
                </div>
                <div class="col-12 my-1">
                    <strong>Điện thoại: </strong> 0939 105 554
                </div>
                <div class="col-12 my-1">
                    <strong>Địa chỉ: </strong> Can Tho, Viet Nam
                </div>
                <div class="col-12 my-1">
                    <strong>Số lượng sinh viên đang thực tập: </strong> 150
                </div>
            </div>
            <div class="col-12 my-1">
                <strong>Giới thiệu: </strong> With over 26 years of advancing
                technology, Axon is dedicated to a bold and powerful mission to
                Protect Life and Obsolete the Bullet. Axon is the global leader
                of connected public safety technologies. We stand for protecting
                life, protecting truth, transparency, and accountability. Rick
                Smith founded Axon (formerly TASER International) following the
                deaths of two high school friends who were gunned down in an act
                of road rage. This tragedy sparked a passion in
            </div>
        </div>
        <div class="col-12"></div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "TeacherDetail",
    methods: {
        ...mapMutations({
            closeDetail: "CLOSE_DETAIL_REGISTER",
        }),
    },
};
</script>

<style></style>
