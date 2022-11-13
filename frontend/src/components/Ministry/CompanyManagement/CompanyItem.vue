<template>
    <div class="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#flush-collapse${index}`"
                    aria-expanded="false"
                    :aria-controls="`flush - collapse${index}`"
                >
                    <img
                        src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBelU3RHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f9e8471fd1ae553364e9ee7d8cd34d50ea9fdd35/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ee4e4854f68df0a745312d63f6c2782b5da346cd/axon-logo.png"
                        alt=""
                        class="me-2 rounded-circle"
                        style="width: 35px; height: 35px"
                    />{{ company.name }}
                </button>
            </h2>
            <div
                :id="`flush-collapse${index}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`flush-heading${index}`"
                data-bs-parent="#accordionFlushExample"
            >
                <div class="accordion-body row">
                    <div class="col-6">
                        <strong>Tên đơn vị: </strong> {{ company.name }}
                    </div>
                    <div class="col-6">
                        <strong>Email: </strong> {{ company.email }}
                    </div>
                    <div class="col-6">
                        <strong>Điện thoại: </strong> {{ company.phoneNumber }}
                    </div>
                    <div class="col-6">
                        <strong>Địa chỉ: </strong> {{ company.address }}
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-3">
                        <button
                            type="button"
                            class="btn btn-outline-secondary p-2"
                            style="font-size: 15px"
                            @click="handleSetDetail"
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
    methods: {
        ...mapMutations({
            showDetail: "SHOW_DETAIL",
        }),
        handleSetDetail() {
            this.showDetail();
            this.$store.commit("SET_COMPANY_DETAIL", this.company);
        },
    },
    props: ["index", "company"],
};
</script>

<style></style>
