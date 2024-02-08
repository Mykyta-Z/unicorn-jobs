<script setup>
const emit = defineEmits(['click'])

function onButtonClick() {
  emit('click')
}
</script>

<template>
  <button class="button" @click="onButtonClick">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  all: unset;
}
</style>
