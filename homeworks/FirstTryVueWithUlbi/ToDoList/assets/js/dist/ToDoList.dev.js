"use strict";

var TodoItem = {
  name: 'TodoItem',
  props: ['item', 'index'],
  methods: {
    markDone: function markDone(ind) {
      this.$parent.markDone(ind);
    }
  },
  template: '#todo_item'
};
var App = {
  data: function data() {
    return {
      todoList: [{
        text: 'Buy a milk',
        isDone: true
      }, {
        text: 'Learn Vue.js',
        isDone: false
      }, {
        text: 'Wash a car',
        isDone: false
      }],
      taskText: ''
    };
  },
  components: {
    TodoItem: TodoItem
  },
  methods: {
    addToDo: function addToDo() {
      if (this.taskText !== '') {
        this.todoList.push({
          text: this.taskText,
          isDone: false
        });
        this.taskText = '';
      }
    },
    markDone: function markDone(index) {
      this.todoList[index].isDone = true;
    }
  }
};
Vue.createApp(App).mount('#app');