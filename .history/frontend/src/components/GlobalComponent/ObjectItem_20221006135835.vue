<template>
<div class="student-item accordion mb-3" :id="`accordion${itemId}`">
    <div class="accordion-item">
        <h2 class="accordion-header" :id="`heading${itemId}`">
            <button class="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#collapse${itemId}`" aria-expanded="false" :aria-controls="`collapse${itemId}`">
                <img :src="`${infor.avatar}`" alt="" class="me-2"
                    style="width: 30px" />{{infor.name}}
            </button>
        </h2>
        <div :id="`collapse${itemId}`" class="accordion-collapse collapse" :aria-labelledby="`heading${itemId}`"
            :data-bs-parent="`#accordion${itemId}`">
            <div class="accordion-body row">
                <div class="col-12" v-for="(value, key) of infor" :key="key">
                    <strong>{{key}}: </strong> {{value}}
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ObjectItem",
    props: {
        itemId: String,
        avatar: String,
        infor: Object,
    },
}
</script>

<style>

</style>