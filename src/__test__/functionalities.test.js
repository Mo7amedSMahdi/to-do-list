/**
 * @jest-environment jsdom
 */
import {
  displayTasks,
  removeTask,
  editTasks,
} from '../modules/functionalities.js';
import Task from '../modules/task.js';

const Tasks = new Task();

document.body.innerHTML = '<ul class="nav--list"></ul>';
const listContainer = document.querySelector('.nav--list');

describe('functionalities : Add Task and local storage test', () => {
  window.localStorage = Storage.prototype;
  test('Add new Task', () => {
    const task = {
      index: 0,
      description: 'Task 1',
      completed: false,
    };
    Tasks.addTask(task);
    displayTasks(Tasks.taskArray, listContainer);
    expect(Tasks.taskArray).toHaveLength(1);
  });

  test('test for local storage', () => {
    JSON.parse(localStorage.getItem('TASKS'));
    expect(localStorage).toHaveLength(1);
  });
});

describe('functionalities : Remove task from list', () => {
  window.localStorage = Storage.prototype;
  test('Remove task', () => {
    removeTask(Tasks.taskArray, Tasks.addTask, '0');
    expect(Tasks.taskArray).toHaveLength(0);
  });
});

describe('functionalities : Edit task ', () => {
  window.localStorage = Storage.prototype;

  test('Edit task', () => {
    const task = {
      index: 0,
      description: 'Task 1',
      completed: false,
    };
    Tasks.addTask(task);
    editTasks('Edit Task', Tasks.taskArray, Tasks.addTask, 0);
    const newTask = Tasks.taskArray.find((task) => task.index === 0);
    expect(newTask.description).toEqual('Edit Task');
  });
});
