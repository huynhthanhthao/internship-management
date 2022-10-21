<template>
  <div class="assess p-4">
    <div class="row">
      <ViewAssessCompany>
        <div class="switch-view col-6 d-flex">
          <div class="btn btn-primary view-assess d-flex">
            <i class="bi bi-eye"></i>
            <span>Xem đánh giá của đơn vị</span>
          </div>
          <div class="btn btn-primary view-assess d-flex">
            <i class="bi bi-eye"></i>
            <span>Xem đánh giá của giảng viên</span>
          </div>
        </div>
      </ViewAssessCompany>
      <AssessTeacher/>
    </div>
  </div>
</template>

<script>
import AssessTeacher from './AssessTeacher.vue';
import ViewAssessCompany from '../../GlobalComponent/ViewAssessCompany.vue';
export default {
  name: "ViewAssess",
  components: {AssessTeacher, ViewAssessCompany }
}
</script>

<style scoped>
.table-progress {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.view-assess{
  height: 60px;
  width: 150px;
  display: flex;
  align-items: center;
}
</style>