<script setup>
defineProps({
  modelValue: String,
  label: String,
  placeholder: String
})
const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
  emit('update:modelValue', event.target.value)
}
</script>
<template>
  <label class="base-input">
    {{ label }}
    <input type="text" :placeholder="placeholder" :value="modelValue" @input="updateValue" />
  </label>
</template>

<style lang="scss" scoped>
.base-input {
  display: flex;
  flex-direction: column;
  row-gap: $pad;
  font-size: $font-size-medium;
  font-weight: $font-weight-bold;
  color: $color-grey-light;

  input {
    border: none;
    height: $form-input-height;
    border-radius: $pad;
    padding: $form-input-padding;
    font-size: $font-size-medium;
    color: $color-grey-lighter;
    background-color: $color-grey-base;
  }
}
</style>
