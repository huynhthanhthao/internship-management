<template>
    <div class="object-infor col-6 d-flex mb-4 p-3 border rounded-4 pe-0 me-3">
        <AvatarComponent :avatar="avatar" class="col-5 me-4" />
        <div class="col-7 flex-grow-1">
            <div class="col-12 my-2" v-for="(value, key) of infor" :key="key">
                <strong>{{key}}: </strong> {{value}}
            </div>
        </div>
    </div>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue';
export default {
    name: "InforCompany",
    data() {
        return {
            avatar: {
                path: "https://i.pinimg.com/originals/d8/64/da/d864dae9f4a980a58011d76a0e0d0212.png",
                width: 150,
                height: 150
            },
        }
    },
    props: {
        infor: {type: Object}
    },
    components: { AvatarComponent }
}
</script>

<style scoped>
.object-infor {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-width: 49%;
}
</style>