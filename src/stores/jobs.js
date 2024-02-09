import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    list: [
      {
        id: uuidv4(),
        icon: 'local_pizza',
        title: 'Police Pizza Delivery Driver 1',
        favorite: true
      },
      {
        id: uuidv4(),
        icon: 'pool',
        title: 'Police Pizza Delivery Driver 2',
        favorite: false
      },
      {
        id: uuidv4(),
        icon: 'pool',
        title: 'Police Pizza Delivery Driver 3',
        favorite: false
      },
      {
        id: uuidv4(),
        icon: 'pool',
        title: 'Police Pizza Delivery Driver 4',
        favorite: true
      },
      {
        id: uuidv4(),
        icon: 'pool',
        title: 'Police Pizza Delivery Driver 5',
        favorite: true
      },
      {
        id: uuidv4(),
        icon: 'pool',
        title: 'Police Pizza Delivery Driver 6',
        favorite: true
      },
      {
        id: uuidv4(),
        icon: 'pool',
        title: 'Police Pizza Delivery Driver 7',
        favorite: true
      }
    ]
  }),
  actions: {
    createNewJob(payload) {
      const job = {
        id: uuidv4(),
        favorite: false,
        ...payload
      }
      this.list.push(job)
    },
    updateFavoriteJob(jobId) {
      const job = this.list.find((job) => job.id === jobId)
      this.updateJob(jobId, {
        favorite: !job.favorite
      })
    },

    updateJob(jobId, payload) {
      const jobIndex = this.list.findIndex((job) => job.id === jobId)

      this.list[jobIndex] = {
        ...this.list[jobIndex],
        ...payload
      }
    },

    deleteJob(jobId) {
      this.list = this.list.filter((job) => job.id !== jobId)
    }
  },
  getters: {
    getJobData: (state) => {
      return (jobId) => state.list.find((job) => job.id === jobId)
    }
  }
})
