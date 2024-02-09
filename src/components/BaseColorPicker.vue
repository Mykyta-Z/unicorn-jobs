<script setup>
import { ColorPicker } from 'vue3-colorpicker'
import 'vue3-colorpicker/style.css'

const model = defineModel()
</script>

<template>
  <color-picker
    class="color-picker"
    v-model:pureColor="model"
    format="hex"
    pickerType="chrome"
    useType="pure"
    disable-alpha
    disable-history
    is-widget
  />
</template>

<style lang="scss" scoped></style>
