<script setup>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

defineProps({
  job: Object,
  addNew: Boolean
})

const emit = defineEmits(['toggleFavorite', 'edit', 'addNew'])

function favoritelick() {
  emit('toggleFavorite')
}

function editClick() {
  emit('edit')
}

function addNewJob() {
  emit('addNew')
}
</script>

<template>
  <div
    class="jobs-list-item"
    :class="{
      'jobs-list-item--addNew': addNew
    }"
    @click="addNewJob"
  >
    <div class="content">
      <BaseButton v-if="addNew" button-type="round-l">
        <BaseIcon class="content-icon" icon="add" size="m" />
      </BaseButton>
      <template v-else>
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
      </template>
    </div>
    <div class="title">
      {{ addNew ? 'Add new Unicorn' : job.title }}
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

  &.jobs-list-item--addNew {
    cursor: pointer;
    .content {
      background-color: unset;
      .content-icon {
        color: black;
      }
    }
    .title {
      text-align: center;
    }
  }

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
