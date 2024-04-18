import { expect, test, beforeEach, describe } from 'vitest'
import { TodoList } from './list'

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test('adds a todo item', () => {
    todoList.addTodo('Learn Jest');
    expect(todoList.getTodos()).toEqual([{ item: 'Learn Jest', completed: false }]);
  });

  test('completes a todo item', () => {
    todoList.addTodo('Learn Jest');
    todoList.completeTodo('Learn Jest');
    expect(todoList.getTodos()).toEqual([{ item: 'Learn Jest', completed: true }]);
  });

  test('completing a non-existent todo does nothing', () => {
    todoList.completeTodo('Non-existent');
    expect(todoList.getTodos()).toEqual([]);
  });
});
