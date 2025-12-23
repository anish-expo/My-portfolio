<<<<<<< HEAD
import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './Router';


const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')
=======
import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './Router';


const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')
>>>>>>> abe7342e9e6f1bd6e7a84178dfa0c792b222decb
