<script setup>
defineProps({
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
  border-radius: $pad * 2;
  padding: $pad $space;
  font-weight: $font-weight-bold;
  font-size: $font-size-medium;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
  }

  &--primary {
    background-color: $color-yellow-base;
    color: $color-yellow-dark;

    &:hover {
      background-color: darken($color-yellow-base, 4%);
      color: $color-black-base;
    }
  }

  &--secondary {
    background-color: $color-yellow-dark;
    color: $color-yellow-base;

    &:hover {
      background-color: lighten($color-yellow-dark, 4%);
    }
  }

  &--error {
    background-color: $color-red-dark;
    color: rgba($color-black-base, 0.7);

    &:hover {
      background-color: lighten($color-red-dark, 4%);
      color: $color-black-base;
    }
  }

  &--round-m {
    padding: 0;
    background-color: $color-yellow-base;
    border-radius: $border-radius-square;
    width: $round-button-m;
    height: $round-button-m;

    &:hover {
      background-color: darken($color-yellow-base, 4%);
      color: $color-black-base;
    }
  }

  &--round-l {
    padding: 0;
    background-color: $color-yellow-base;
    border-radius: $border-radius-square;
    width: $round-button-l;
    height: $round-button-l;

    &:hover {
      background-color: darken($color-yellow-base, 4%);
      color: $color-black-base;
    }
  }
}
</style>
