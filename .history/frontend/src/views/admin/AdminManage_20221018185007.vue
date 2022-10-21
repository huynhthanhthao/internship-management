<template>
  <div class="admin-manage">
    <TitleStructure :title="`Danh sách tài khoản`"></TitleStructure>
    <TitleStructure :title="`Tổng quan`"></TitleStructure>
  </div>
</template>

<script>
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
export default {
    name: "AdminManage",
    components: { TitleStructure },
    data(){
        return{
            title: {
                headerList: "Danh sách tài khoản",
                headerDetail: "Tổng quan"
            }
        }
    }
}
</script>

<style>

</style>