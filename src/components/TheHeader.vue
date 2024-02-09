<script setup>
import { useJobsStore } from '@/stores/jobs'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

const jobStore = useJobsStore()
</script>

<template>
  <header class="header">
    <div class="header-title">Unicorn Jobs - {{ jobStore.getFavoritesCount }} Saved</div>
    <BaseButton class="header-menu">
      <BaseIcon icon="menu" size="m" color="yellow-base" />
    </BaseButton>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: $header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $pad $pad $pad $space;
  background-color: rgba($color-black-base, 0.17);

  .header-title {
    color: $color-white-base;
  }

  .header-menu {
    height: 100%;
    color: $color-yellow-base;
  }
}
</style>
