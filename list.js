// TodoList.js
class TodoList {
    constructor() {
      this.todos = [];
    }
  
    addTodo(item) {
      this.todos.push({ item, completed: false });
    }
  
    completeTodo(item) {
      const todo = this.todos.find(todo => todo.item === item);
      if (todo) {
        todo.completed = true;
      }
    }
  
    getTodos() {
      return this.todos;
    }
  }
  
export { TodoList }
  