<template>
    <div class="object-infor col-6 d-flex p-3 border rounded-4">
        <div v-if="student.companyId !== null" class="d-flex">
            <AvatarComponent
                :avatar="{ path: company.urlAvatar, height: 150, width: 150 }"
                class="col-5 me-4"
            />
            <div class="col-7 row flex-grow-1">
                <div class="col-12 my-2">
                    <strong>Đơn vị: </strong> {{ company.name }}
                </div>
                <div class="col-12 my-2">
                    <strong>Số điện thoại: </strong> {{ company.phoneNumber }}
                </div>
                <div class="col-12 my-2">
                    <strong>Email: </strong> {{ company.email }}
                </div>
                <div class="col-12 my-2">
                    <strong>Địa chỉ: </strong> {{ company.address }}
                </div>
            </div>
        </div>
        <div
            v-else
            class="d-flex justify-content-center align-items-center flex-grow-1"
        >
            <h4 style="color: red">Sinh viên chưa tham gia thực tập!</h4>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarComponent from "./AvatarComponent.vue";
export default {
    name: "InforCompany",
    components: { AvatarComponent },
    computed: {
        ...mapGetters({
            company: "getCompanyInfor",
            student: "getStudentInfor",
        }),
    },
};
</script>

<style scoped>
.object-infor {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-width: 49%;
}
</style>
