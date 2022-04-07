/**
 * @jest-environment jsdom
 */
import { displayTasks, removeTask } from '../modules/functionalities.js';
import Task from '../modules/task.js';

const Tasks = new Task();

describe('Add Task and local storage test', () => {
  window.localStorage = Storage.prototype;
  test('Add new Task', () => {
    const task = {
      index: 0,
      description: 'Task 1',
      completed: false,
    };
    Tasks.addTask(task);
    document.body.innerHTML = '<ul class="nav--list"></ul>';
    const listContainer = document.querySelector('.nav--list');
    displayTasks(Tasks.taskArray, listContainer);
    expect(Tasks.taskArray).toHaveLength(1);
  });

  test('test for local storage', () => {
    JSON.parse(localStorage.getItem('TASKS'));
    expect(localStorage).toHaveLength(1);
  });
});

describe('Remove task from list', () => {
  window.localStorage = Storage.prototype;
  test('Remove task', () => {
    removeTask(Tasks.taskArray, Tasks.addTask, '0');
    expect(Tasks.taskArray).toHaveLength(0);
  });
});
