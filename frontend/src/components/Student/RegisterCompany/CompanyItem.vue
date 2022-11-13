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
                        :src="`${company.urlAvatar}`"
                        alt=""
                        class="me-2 rounded-circle"
                        style="width: 35px; height: 35px"
                    />
                    <span>{{ company.name }}</span>
                </button>
            </h2>
            <div
                :id="`collapse${index}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`heading${index}`"
                :data-bs-parent="`#accordion${index}`"
            >
                <div class="accordion-body row">
                    <div class="col-12">
                        <strong>Email: </strong> {{ company.email }}
                    </div>
                    <div class="col-12">
                        <strong>Địa chỉ: </strong> {{ company.address }}
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-4">
                        <button
                            type="button"
                            class="btn btn-outline-secondary p-2"
                            style="font-size: 15px"
                            @click="showDetail(company)"
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
    name: "CompanyItem",
    props: ["company", "index"],
    methods: {
        showDetail(company) {
            const headerDetail = document.querySelector(".title-detail .label");
            headerDetail.innerText = "Thông tin chi tiết";
            this.$store.commit("SHOW_COMPANY");
            this.$store.commit("SET_COMPANY_DETAIL", company);
        },
    },
};
</script>

<style scoped></style>
