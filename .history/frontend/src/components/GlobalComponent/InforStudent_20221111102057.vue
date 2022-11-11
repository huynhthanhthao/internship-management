<template>
    <div class="object-infor col-6 d-flex p-3 border rounded-4">
        <AvatarComponent
            :avatar="{ path: student.urlAvatar, height: 150, width: 150 }"
            class="col-5 me-4"
        />
        <div class="col-7 row flex-grow-1">
            <div class="col-8 my-1">
                <strong>MSSV: </strong> {{ student.username }}
            </div>
            <div class="col-12 my-1">
                <strong>Họ và tên: </strong> {{ student.name }}
            </div>
            <div class="col-12 my-1">
                <strong>Lớp: </strong> {{ student.class }}
            </div>
            <div class="col-5 my-1">
                <strong>Học kỳ: </strong> {{ student.semester }}
            </div>
            <div class="col-7 my-1">
                <strong>Năm học: </strong> {{ student.schoolYear }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarComponent from "./AvatarComponent.vue";
export default {
    name: "InforStudent",
    components: { AvatarComponent },
    computed: {
        ...mapGetters({ student: "getStudentInfor" }),
    },
};
</script>

<style scoped>
.object-infor {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-width: 49%;
}
</style>
