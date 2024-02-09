import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3ColorPicker from 'vue3-colorpicker'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.use(Vue3ColorPicker)

app.mount('#app')
