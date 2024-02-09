<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 's',
    validator(value) {
      // Three sizes are available
      return ['s', 'm', 'l'].includes(value)
    }
  }
})
</script>

<template>
  <span class="material-icons" :class="[`size-${size}`]">
    {{ icon }}
  </span>
</template>

<style lang="scss" scoped>
.size-s {
  font-size: $space;
}
.size-m {
  font-size: $space * 2;
}
.size-l {
  font-size: $space * 4;
}
</style>
