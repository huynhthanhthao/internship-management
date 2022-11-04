<template>
    <div class="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header" :id="`flush-heading${index}`">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#flush-collapse${index}`"
                    aria-expanded="false"
                    :aria-controls="`flush-collapse${index}`"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
                        alt=""
                        class="me-2"
                        style="width: 30px"
                    />{{ student.name }}
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
                        <strong>Họ và tên: </strong> {{ student.name }}
                    </div>

                    <div class="col-6">
                        <strong>Điện thoại: </strong> {{ student.phoneNumber }}
                    </div>
                    <div class="col-12 mt-2">
                        <strong>Email: </strong> {{ student.email }}
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-2">
                        <button
                            type="button"
                            class="btn btn-outline-secondary p-2"
                            style="font-size: 15px"
                            @click="handleViewDetail"
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
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "RegisterList",
    methods: {
        ...mapMutations({
            showDetail: "SHOW_DETAIL",
        }),
        handleViewDetail() {
            this.showDetail();

            this.$store.dispatch("setStudentDetail", {
                studentId: this.student.id,
                companyId: this.account.id,
            });
        },
    },
    props: ["student", "index"],
    computed: mapGetters({ account: "getAccount" }),
};
</script>

<style></style>
