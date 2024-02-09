<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import BaseInput from './BaseInput.vue'
import { useModalStore } from '@/stores/modal'
import { useJobsStore } from '@/stores/jobs'
import BaseLink from './BaseLink.vue'

const props = defineProps({
  jobId: String
})

const modalStore = useModalStore()

function closeModal() {
  modalStore.closeModal()
}

const jobsStore = useJobsStore()

const jobData = jobsStore.getJobData(props.jobId) || {}

const jobTitle = ref(jobData.title || '')
const jobIcon = ref(jobData.icon || '')

function saveJob() {
  if (!jobTitle.value || !jobIcon.value) {
    return
  }

  if (props.jobId) {
    jobsStore.updateJob(jobData.id, {
      title: jobTitle.value,
      icon: jobIcon.value
    })
  } else {
    jobsStore.createNewJob({
      title: jobTitle.value,
      icon: jobIcon.value
    })
  }

  closeModal()
}

function deleteJob() {
  jobsStore.deleteJob(jobData.id)
  closeModal()
}
</script>
<template>
  <div class="edit-jobs-modal">
    <BaseButton button-type="round-l" class="modal-close" @click="closeModal">
      <BaseIcon icon="add" size="m" class="modal-close-icon" />
    </BaseButton>
    <div class="modal-content">
      <div class="modal-content-section">
        <BaseInput
          label="Name of Unicorn Job"
          placeholder="Please enter the Job name"
          v-model="jobTitle"
        />
      </div>
      <div class="modal-content-section">
        <BaseInput
          label="Material Icon"
          placeholder="Please paste the icon code"
          v-model="jobIcon"
        />
        <p class="section-description">
          Use the web codes found on Google’s material icons and paste in the box above!
          <BaseLink href="https://fonts.google.com/icons" target="_blank">
            https://fonts.google.com/icons
          </BaseLink>
        </p>
      </div>
    </div>
    <div class="modal-actions">
      <BaseButton button-type="primary" @click="saveJob">Save</BaseButton>
      <BaseButton button-type="secondary" @click="closeModal">Cancel</BaseButton>
      <BaseButton v-if="jobId" class="modal-action-delete" button-type="error" @click="deleteJob">
        Delete
      </BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.edit-jobs-modal {
  position: relative;
  width: 800px;
  background-color: $color-grey-darker;
  padding: 126px 107px 80px 93px;

  border-radius: 64px;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  .modal-close {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 100%;
    top: 0;
    & .modal-close-icon {
      transform: rotate(45deg);
    }
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    row-gap: $space * 2;

    .modal-content-section {
      .section-description {
        color: $color-grey-lighter;
        margin: $pad 0 0 0;
      }
    }
  }

  .modal-actions {
    margin-top: 210px;
    display: flex;
    column-gap: $pad;

    .modal-action-delete {
      margin-left: auto;
    }
  }
}
</style>
