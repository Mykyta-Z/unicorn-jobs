<script setup>
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modalStore.modalState?.component"
        class="modal-wrapper"
        @click.self="modalStore.closeModal"
      >
        <component :is="modalStore.modalState?.component" v-bind="modalStore.modalState?.props" />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  overflow: scroll;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  background: rgba($color-black-base, 0.8);
  display: grid;
  place-items: center;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}
</style>
