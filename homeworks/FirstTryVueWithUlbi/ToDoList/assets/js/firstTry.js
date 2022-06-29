/* занятие с Сашей
const App = {
    data() {
        // основной объект, где мы описываем переменные и т.л
        return {
            likes: 0,
            text: 'Hello Vue!',
            // isEven: true // объявлена в computed через return
        }
    },
    // watch: {
    //     // объект, где мы следим за другими объектами
           // закоменчено, т.к. у нас есть computed, где все общитывается
    //     likes(value) {
    //         this.isEven = value % 2 === 0
    //         // if (value % 2 === 0) {
    //         //     this.isEven = true;
    //         // } else {
    //         //     this.isEven = false
    //         // }
    //     }
    // },
    computed: {
        // тут описываются свойства, которые рассчитываются
        isEven (){
            return this.likes % 2 === 0
        }
    },
    created (){
        // тут пишется все, что дожно быть сразу инициализированно
        this.incLikes()
    },
    methods: {
        // методы 
        incLikes (){
            this.likes++
        },
        // decLikes (){
        //     if(this.likes >= 1) {
        //         this.likes--
        //     }
        // },
        decLikes (){
            if(this.checkDecLikes()) {
                this.likes--
            }
        },
        checkDecLikes () {
            return this.likes > 0 
        }
    }
}

// создаем апликейшн
Vue.createApp(App).mount('#app')
*/