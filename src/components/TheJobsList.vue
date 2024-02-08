<script setup>
import { useJobsStore } from '@/stores/jobs'
import TheJobsListItem from './TheJobsListItem.vue'

const jobs = useJobsStore()

function updateFavorite(jobId) {
  jobs.updateFavoriteJob(jobId)
}

function editJob() {
    // TODO: Open modal
}
</script>

<template>
  <div class="jobs-list">
    <TheJobsListItem
      v-for="job in jobs.list"
      :key="job.title"
      :job="job"
      @toggleFavorite="updateFavorite"
      @edit="editJob"
    />
  </div>
</template>

<style lang="scss" scoped>
.jobs-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: $space * 4;
  row-gap: $space * 4;
}
</style>
