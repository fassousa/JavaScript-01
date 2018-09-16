//= require rails-ujs
//= require_tree .
new Vue({
  el: '#app',
  data: {
    todos: [],
    userInput: ''
  },
  methods: {
    addTodo: function() {
      if (this.userInput.trim() == '') {
        return;
      }
      var newTodo = {
        id: _.uniqueId(),
        value: this.userInput
      };
      this.todos.push(newTodo);
      console.log(this.todos);
    },
    removeTodo(todo) {
      var id = todo.id;
      for (var i = 0; i < this.todos.lenght; i++) {
        if (this.todos[i].id == id) {
          this.todos.splice(i, 1);
          break;
        }
      }
    }
  }
});
