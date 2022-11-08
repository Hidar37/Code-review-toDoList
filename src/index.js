import ToDoList from '../modules/toDoListFunctionlity.js';
import * as variables from '../modules/values.js';
import './style.css';

const objToDoList = new ToDoList(variables.ulElement);

if (localStorage.getItem('toDoListItems') !== null) {
  objToDoList.setBookList();
  objToDoList.showToDoList();
}
variables.form.addEventListener('submit', (e) => {
  e.preventDefault();
  objToDoList.addItemToList(variables.toDoText.value);
});
objToDoList.clearCompletedTasks();