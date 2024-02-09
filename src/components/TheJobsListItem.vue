<script setup>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

defineProps({
  job: Object
})

const emit = defineEmits(['toggleFavorite', 'edit'])

function favoritelick() {
  emit('toggleFavorite')
}

function editClick() {
  emit('edit')
}
</script>

<template>
  <div class="jobs-list-item">
    <div class="content">
      <BaseIcon class="content-icon" :icon="job.icon" size="l" />
      <BaseButton
        class="favorite"
        :class="{
          'favorite--added': job.favorite
        }"
        @click="favoritelick"
      >
        <BaseIcon :icon="job.favorite ? 'favorite' : 'favorite_border'" />
      </BaseButton>
      <BaseButton class="edit" button-type="round-m" @click="editClick">
        <BaseIcon icon="edit" />
      </BaseButton>
    </div>
    <div class="title">
      {{ job.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jobs-list-item {
  background-color: rgba($color-black-base, 0.4);
  padding: $space;
  border-radius: 56px;
  min-height: 356px;
  transition: transform 0.3s;
  user-select: none;

  .content {
    margin-bottom: $pad;
    background-color: $color-grey-dark;
    border-radius: $space * 2;
    height: 248px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .content-icon {
      color: $color-green-base;
    }

    .favorite {
      position: absolute;
      left: $space;
      bottom: $pad;
      color: $color-yellow-light;

      &.favorite--added {
        color: $color-red-base;
      }
    }

    .edit {
      opacity: 0;
      transition: opacity 0.5s;
      position: absolute;
      right: $pad;
      top: $pad;
      color: rgba($color-black-base, 0.75);
    }
  }

  .title {
    font-size: $font-size-small;
    color: $color-white-base;
    padding: 0 $space;
  }

  &:hover {
    outline: 1px solid $color-yellow-base;
    transform: translateY(-$pad * 2);

    .content .edit {
      opacity: 1;
    }
  }
}
</style>
