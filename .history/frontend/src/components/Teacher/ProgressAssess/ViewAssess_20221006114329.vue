<template>
  <div class="assess p-4">
    <div class="row">
      <ViewAssessCompany>
        <div class="switch-view">
          <div class="btin btn-primary">OK</div>
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

</style>