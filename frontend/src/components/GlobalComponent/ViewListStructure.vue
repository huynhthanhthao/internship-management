<template>
<div class="col-12 view-list-layout">
    <div class="d-flex">
        <div class="col-6 object-list me-4 m-0">
            <h2 class="header-list label fw-bold" style="color: #555555">
                {{title.headerList}}
            </h2>
            <div class="line my-3"></div>
        </div>
        <div class="col-6 m-0">
            <h2 class="header-detail label fw-bold" style="color: #555555">
                {{title.headerDetail}}
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
        title: {
            headerList: {type:String},
            headerDetail: {type: String},
        }
    }
}
</script>

<style scoped>
    .object-list{
        width: 48%;
    }
</style>