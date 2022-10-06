<template>
<div class="col-12 view-list-layout">
    <div class="d-flex">
        <div class="col-6 object-list">
            <h2 class="header-list label m-0 p-2 pt-4 fw-bold" style="color: #555555">
                {{listTitle}}
            </h2>
            <div class="line my-3"></div>
        </div>
        <div class="col-6 object-detail" >
            <h2 class="header-detail label m-0 p-2 pt-4 fw-bold" style="color: #555555">
                Tổng quan
            </h2>
            <div class="line my-3"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ViewListStructure",
    props:{
        listTitle: {
            type: String
        }
    }
}
</script>

<style scoped>
    .object-list{
        width: 95%;
    }
</style>