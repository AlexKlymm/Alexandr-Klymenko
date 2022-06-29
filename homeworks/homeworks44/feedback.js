const App = {
    data () {
        return {
            name: '',
            email: '', 
            phone: '',
            subject: '',
            message: ''
        }
    }
}

Vue.create(App).mount('#app')