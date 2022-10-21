<template>
<div class="m-0">
    <h2 class="label fw-bold" style="color: #555555">
        {{title}}
    </h2>
    <div class="line my-3"></div>
</div>
</template>

<script>
export default {
    name: "TitleStructure",
    props:{
        title: {type: String}
    }
}
</script>

<style>

</style>