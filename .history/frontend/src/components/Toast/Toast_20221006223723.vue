<template>
    <div
<<<<<<< HEAD
        class="toast  animate__fadeInRight animate__animated"
=======
        class="toast d-block d-none animate__fadeInRight animate__animated"
>>>>>>> 751d467ab4539ea435c3554c8049a8b234d36ab7
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
    >
        <div class="toast-header">
            <i
                :class="
                    toast.isSuccess
                        ? 'bi bi-check-square-fill text-success'
                        : 'bi bi-check-square-fill text-danger'
                "
            ></i>
            <strong class="me-auto ms-2">Notify</strong>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
            ></button>
        </div>
        <div
            :class="
                toast.isSuccess
                    ? 'toast-body text-success fw-bold'
                    : 'toast-body text-danger fw-bold'
            "
        >
            {{ toast.message }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ToastComponent",
    computed: mapGetters({
        toast: "getToast",
    }),
};
</script>

<style>
.toast {
    z-index: 2;
    position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>
