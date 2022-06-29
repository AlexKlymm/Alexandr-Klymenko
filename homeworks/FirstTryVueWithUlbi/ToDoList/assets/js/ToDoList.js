const TodoItem = {
    name: 'TodoItem',
    props: ['item', 'index'],
    methods: {
        markDone(ind) {
            this.$parent.markDone(ind)
        }
    },
    template: '#todo_item'
}

const App = {
    data() {
        return {
            todoList: [
                {
                    text: 'Buy a milk',
                    isDone: true
                },
                {
                    text: 'Learn Vue.js',
                    isDone: false
                },
                {
                    text: 'Wash a car',
                    isDone: false
                }
            ],
            taskText: ''
        }
    },
    components: {
        TodoItem
    },
    methods: {
        addToDo() {
            if ( this.taskText !== '' ) {
                this.todoList.push({
                    text: this.taskText,
                    isDone: false
                });
                this.taskText = '';
            }
        },
        markDone(index) {
            this.todoList[index].isDone = true;
        }
    }
}

Vue.createApp(App).mount('#app')