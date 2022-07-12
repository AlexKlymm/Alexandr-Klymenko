import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI/components'

const app = createApp(App)

console.log(components);

components.forEach( component => {
    app.component(component.name, component)
});

console.log(components);
app.mount('#app')