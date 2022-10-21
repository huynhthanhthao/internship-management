<template>
<div class="infor-internship">
    <div class="infor__header col-12">
        <div class="infor__title col-12 me-4 m-0 p-2 pt-4">
            <h2 class="label fw-bold" style="color: #555555">
                Quản lý thực tập
            </h2>
            <div class="line my-3"></div>
        </div>
        <div class="infor__switch col-12 row">
            <div class="col-2 me-2">
                <router-link class="text-decoration-none" to="/student/manage/view-progress">
                    <button type="button" class="btn btn-primary" disabled @click="viewInforInternship($event)">
                        <i class="bi bi-eye fs-4 me-2"></i>
                        <span>Xem tiến độ thực tập</span>
                    </button>
                </router-link>
            </div>
            <div class="col-2 me-2">
                <router-link class="text-decoration-none" to="/student/manage/view-assess-company">
                    <button type="button" class="btn btn-primary" @click="viewInforInternship($event)">
                        <i class="bi bi-eye fs-4 me-2"></i>
                        <span>Xem đánh giá của đơn vị</span>
                    </button>
                </router-link>
            </div>
            <div class="col-2">
                <router-link class="text-decoration-none" to="/student/manage/view-assess-teacher">
                    <button type="button" class="btn btn-primary" @click="viewInforInternship($event)">
                        <i class="bi bi-pencil-square fs-4 me-2"></i>
                        <span>Đánh giá kết quả thực tập</span>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
    <div class="infor__content">
            
    </div>
</div>
</template>

<script>
export default {
    name: "InforInternShip"
}
</script>

<style scoped>
    .btn {
        height: 80px;
        width: 180px;
        display: flex;
        align-items: center;
        }
</style>