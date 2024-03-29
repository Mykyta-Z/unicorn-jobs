<script setup>
import { ref } from 'vue'
import { useModalStore } from '@/stores/modal'
import { useJobsStore } from '@/stores/jobs'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import BaseInput from './BaseInput.vue'
import BaseColorPicker from './BaseColorPicker.vue'
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
const jobIconColor = ref(jobData.iconColor || '#ffffff')

function saveJob() {
  if (!jobTitle.value || !jobIcon.value) {
    return
  }
  const jobPayload = {
    title: jobTitle.value,
    icon: jobIcon.value,
    iconColor: jobIconColor.value
  }

  // If no jobId provided -> create new job instance
  if (props.jobId) {
    jobsStore.updateJob(jobData.id, jobPayload)
  } else {
    jobsStore.createNewJob(jobPayload)
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
    <div class="modal-close">
      <BaseButton button-type="round-l" @click="closeModal">
        <BaseIcon icon="add" size="m" class="modal-close-icon" />
      </BaseButton>
    </div>
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
      <div class="modal-content-section">
        <div class="section-title">Icon color</div>
        <BaseColorPicker v-model="jobIconColor" />
      </div>

      <div class="modal-content-section">
        <div class="section-title">Icon preview:</div>
        <BaseIcon
          :icon="jobIcon"
          size="l"
          :style="{
            color: jobIconColor
          }"
        />
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
  background-color: $color-grey-darker;
  padding: $space * 2 $space;
  display: flex;
  flex-direction: column;
  gap: $space * 2;
  height: 100%;

  @media screen and (min-width: $mq-laptop) {
    width: $modal-width-laptop;
    padding: 126px 107px 80px 93px;
    border-radius: $border-radius-large;
    margin: $pad * 4 0;
    height: auto;
    gap: 210px;
  }

  .modal-close {
    display: none;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 100%;
    top: 0;
    & .modal-close-icon {
      transform: rotate(45deg);
    }

    @media screen and (min-width: $mq-laptop) {
      display: block;
    }
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    row-gap: $space * 2;

    .modal-content-section {
      .section-title {
        margin-bottom: $pad;
        font-size: $font-size-medium;
        font-weight: $font-weight-bold;
        color: $color-grey-light;
      }
      .section-description {
        color: $color-grey-lighter;
        margin: $pad 0 0 0;
      }
    }
  }

  .modal-actions {
    margin-top: auto;
    display: flex;
    gap: $pad;
    flex-direction: column;

    @media screen and (min-width: $mq-tablet) {
      flex-direction: row;
    }

    .modal-action-delete {
      @media screen and (min-width: $mq-tablet) {
        margin-left: auto;
      }
    }
  }
}
</style>
