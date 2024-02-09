import { markRaw } from 'vue'
import { defineStore } from 'pinia'

const initialState = { component: null, props: {} }

export const useModalStore = defineStore('modal', {
  state: () => ({ modalState: initialState }),
  actions: {
    openModal({ component, props = {} }) {
      // Get the body element
      const body = document.body

      // If its there, prevent scroll from happening
      if (body) body.style.overflow = 'hidden'

      this.modalState = { component: markRaw(component), props }
    },

    closeModal() {
      this.modalState = initialState
      // Get the body element
      const body = document.body

      // If its there, reset overflow style
      if (body) body.style.overflow = 'auto'
    }
  }
})
