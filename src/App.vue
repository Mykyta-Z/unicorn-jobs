<script setup>
import TheHeader from './components/TheHeader.vue'
import TheJobsList from './components/TheJobsList.vue'
import BaseModal from './components/BaseModal.vue'
</script>

<template>
  <TheHeader />
  <main class="page">
    <h1 class="page-title">
      Welcome to Unicorn Jobs, where we display new job roles that combine 2 different careers into
      one.
    </h1>
    <TheJobsList />
    <BaseModal />
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

.page {
  max-width: $page-width-laptop;
  margin: 0 auto;
  padding: $space;

  @media screen and (min-width: $mq-laptop) {
    padding: $header-height 0;
  }
}
.page-title {
  color: $color-white-base;
  font-size: $font-size-large;
  font-weight: $font-weight-normal;
  margin: 0 0 $page-title-margin 0;
}
</style>
