<template>
    <div class="object-item accordion mb-3" :id="`accordion${index}`">
        <div class="accordion-item">
            <h2 class="accordion-header" :id="`heading${index}`">
                <button
                    class="accordion-button collapsed p-3"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index}`"
                    aria-expanded="false"
                    :aria-controls="`collapse${index}`"
                >
                    <img
                        :src="student.urlAvatar"
                        alt=""
                        class="me-2 rounded-circle"
                        style="width: 40px; height: 40px"
                    />
                    <span class="me-2">{{ student.username }}</span>
                    <span>{{ student.name }}</span>
                </button>
            </h2>
            <div
                :id="`collapse${index}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`heading${index}`"
                :data-bs-parent="`#accordion${index}`"
            >
                <div class="accordion-body row">
                    <div class="col-4">
                        <strong>Lớp: </strong> {{ student.class }}
                    </div>
                    <div class="col-3">
                        <strong>Học kỳ: </strong> {{ student.semester }}
                    </div>
                    <div class="col-5">
                        <strong>Niên khóa: </strong> {{ student.schoolYear }}
                    </div>
                    <div class="col-12">
                        <strong>Đơn vị thực tập: </strong>
                        {{ student.companyName }}
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-4">
                        <button
                            type="button"
                            class="btn btn-outline-secondary p-2"
                            style="font-size: 15px"
                            @click="showDetail(student)"
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
export default {
    name: "StudentItem",
    props: ["student", "index"],
    methods: {
        showDetail(student) {
            const headerDetail = document.querySelector(".title-detail .label");
            headerDetail.innerText = "Thông tin chi tiết";
            this.$store.commit("SHOW_DETAIL_STUDENT");
            this.$store.commit("SET_STUDENT_ACTIVE", student);
        },
    },
};
</script>

<style scoped></style>
