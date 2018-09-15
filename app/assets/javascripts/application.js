//= require rails-ujs
//= require_tree .
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

var todos = [];

buttonEl.addEventListener('click', addTodo);

function addTodo() {
  var userInput = inputEl.value;
  if (userInput.trim() == '') {
    return
  }
  var newTodo = { id: Math.random(), value: userInput };
  todos.push(newTodo);
  var todoLi = document.createElement('LI');
  todoLi.textContent = userInput;
  todoLi.addEventListener('click', removeTodo);
  todoLi.dataset.id = newTodo.id;
  ulEl.appendChild(todoLi);
  console.log(todos);
}

function removeTodo() {
  var clickedLi = event.target;
  var itemId = clickedLi.dataset.id;
  for (var i = todos.length - 1; i >= 0; i--) {
    if (todos[i].id == itemId) {
      todos.splice(i, 1);
      break;
    }
  }
  clickedLi.parentNode.removeChild(clickedLi);
  console.log(todos);
}
