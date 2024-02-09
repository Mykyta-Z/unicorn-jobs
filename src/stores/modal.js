import { markRaw } from 'vue'
import { defineStore } from 'pinia'

const initialState = { component: null, props: {} }

export const useModalStore = defineStore('modal', {
  state: () => ({ modalState: initialState }),
  actions: {
    openModal({ component, props = {} }) {
      this.modalState = { component: markRaw(component), props }
    },

    closeModal() {
      this.modalState = initialState
    }
  }
})
