<script setup>
const { buttonType } = defineProps({
  buttonType: {
    type: String,
    validator(value) {
      // Only one button type at a time
      return ['primary', 'secondary', 'error', 'round-m', 'round-l'].includes(value)
    }
  }
})
const emit = defineEmits(['click'])

function onButtonClick() {
  emit('click')
}
</script>

<template>
  <button class="button" :class="[`button--${buttonType}`]" @click="onButtonClick">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &--round-m {
    background-color: $color-yellow-base;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
}
</style>
