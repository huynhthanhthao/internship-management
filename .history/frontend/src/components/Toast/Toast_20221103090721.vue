<template>
    <div
        class="toast d-block animate__fadeInRight animate__animated"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        v-if="toast.isShow"
    >
        <div class="toast-header">
            <i
                :class="
                    toast.isSuccess
                        ? 'bi bi-check-square-fill text-success'
                        : 'bi bi-x-square-fill text-danger'
                "
            ></i>
            <strong class="me-auto ms-2 fs-6">Thông báo</strong>
            <button
                type="button"
                class="btn-close"
                @click="closeToast"
            ></button>
        </div>
        <div
            :class="
                toast.isSuccess
                    ? 'toast-body text-success '
                    : 'toast-body text-danger '
            "
        >
            {{ toast.message }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "ToastComponent",
    computed: mapGetters({
        toast: "getToast",
    }),
    methods: mapMutations({ closeToast: "CLOSE_TOAST" }),
};
</script>

<style>
.toast {
    position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>
