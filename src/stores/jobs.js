import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', {
  state: () => {
    return {
      list: [
        {
          icon: {
            type: 'local_pizza'
          },
          title: 'Police Pizza Delivery Driver 1',
          favorite: true
        },
        {
          icon: {
            type: 'pool'
          },
          title: 'Police Pizza Delivery Driver 2',
          favorite: false
        },
        {
          icon: {
            type: 'pool'
          },
          title: 'Police Pizza Delivery Driver 3',
          favorite: false
        },
        {
          icon: {
            type: 'local_pizza'
          },
          title: 'Police Pizza Delivery Driver 4',
          favorite: true
        },
        {
          icon: {
            type: 'local_pizza'
          },
          title: 'Police Pizza Delivery Driver 5',
          favorite: true
        },
        {
          icon: {
            type: 'pool'
          },
          title: 'Police Pizza Delivery Driver 6',
          favorite: true
        },
        {
          icon: {
            type: 'pool'
          },
          title: 'Police Pizza Delivery Driver 7',
          favorite: true
        }
      ]
    }
  },
  actions: {
    updateFavoriteJob() {
      // TODO: Add action
    }
  }
})
