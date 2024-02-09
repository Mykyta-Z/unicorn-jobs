<script setup>
defineProps({
  href: String,
  target: String
})
</script>

<template>
  <a :href="href" :target="target"><slot /></a>
</template>

<style lang="scss" scoped>
a {
  color: $color-yellow-base;
}
</style>
