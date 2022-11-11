<template>
    <div>
        <!-- Modal -->
        <div
            class="modal fade"
            :id="id"
            tabindex="-1"
            aria-labelledby="ModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold" id="ModalLabel">
                            <i class="bi bi-bell-fill text-warning fs-3"></i>
                            Chú ý
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">{{ message }}</div>
                    <div class="modal-footer">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ModalComponent",
    computed: mapGetters({ modal: "getModal" }),
    props: ["id", "message"],
};
</script>

<style></style>
