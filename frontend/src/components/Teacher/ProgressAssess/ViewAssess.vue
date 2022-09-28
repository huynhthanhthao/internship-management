<template>
  <div class="assess p-4">
    <div class="row">
      <AssessCompany/>
      <AssessTeacher/>
    </div>
  </div>
</template>

<script>
import AssessCompany from './AssessCompany.vue';
import AssessTeacher from './AssessTeacher.vue';
export default {
  name: "ViewAssess",
  components: { AssessCompany, AssessTeacher }
}
</script>

<style scoped>

.table-progress {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

</style>