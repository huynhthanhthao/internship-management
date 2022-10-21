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
                <div :class="numCol()" >
                    <strong>Email: </strong> {{infor.email}}
                </div>
                <div class="col-6">
                    <strong>Điện thoại: </strong> {{infor.phone}}
                </div>
                <div class="col-12">
                    <strong>{{layout.optionField}}: </strong> {{infor.option}}
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
        itemId: {type: String},
        layout: {
            nameField: {type: String},
            optionField: {type:String},
        },
        infor: {
            avatar: {type:String},
            name: {type: String},
            email: {type: String},
            phone: {type: String},
            option: {type: String}
        }
    },
    methods: {
        numCol(key){
            const keyArrays = Object.keys(this.infor);
            const length = keyArrays.length;
            if(keyArrays[length-1] == key)
                return "col-12";
            else
                return "col-6";
        }
    },
}
</script>

<style>

</style>