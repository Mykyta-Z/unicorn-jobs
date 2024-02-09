<script setup>
import { useJobsStore } from '@/stores/jobs'
import { useModalStore } from '@/stores/modal'
import TheJobsListItem from './TheJobsListItem.vue'
import TheEditJobModal from './TheEditJobModal.vue'

const jobsStore = useJobsStore()

function updateFavorite(jobId) {
  jobsStore.updateFavoriteJob(jobId)
}

const modalStore = useModalStore()

function editJob(jobId) {
  modalStore.openModal({
    component: TheEditJobModal,
    props: {
      jobId
    }
  })
}
</script>

<template>
  <div class="jobs-list">
    <TheJobsListItem
      v-for="job in jobsStore.list"
      :key="job.title"
      :job="job"
      @toggleFavorite="updateFavorite(job.id)"
      @edit="editJob(job.id)"
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
