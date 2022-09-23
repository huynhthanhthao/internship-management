<template>
    <div>
        <div
            class="students-register row p-4 animate__fadeIn animate__animated"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Danh sách sinh viên
                        <div class="line my-3"></div>
                    </h2>
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Thông tin chi tiết
                        <div class="line my-3"></div>
                    </h2>
                </div>
            </div>
            <div
                class="accordion col-6"
                style="height: 500px; overflow: scroll"
            >
                <RegisterItem class="mb-2" />
                <RegisterItem class="mb-2" />
                <RegisterItem class="mb-2" />
                <RegisterItem class="mb-2" />
            </div>
            <div class="col-6">
                <InformationDetail v-if="isShowDetail" />
                <Statistics v-else />
            </div>
        </div>
        <Modal />
    </div>
</template>

<script>
import RegisterItem from "../../components/StudentsRegister/RegisterItem.vue";
export default {
    name: "StudentsTraining",
    components: { RegisterItem },
};
</script>

<style></style>
