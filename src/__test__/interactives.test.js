/**
 * @jest-environment jsdom
 */
import Task from '../modules/task.js';
import { completedStatus, clearCompleted } from '../modules/interactives.js';

const Tasks = new Task();

describe('Interactive : Mark task as completed ', () => {
  window.localStorage = Storage.prototype;

  test('Edit Task: Mark task as completed', () => {
    const task = {
      index: 0,
      description: 'Task 1',
      completed: false,
    };
    Tasks.addTask(task);
    completedStatus(Tasks.tasksArray, Tasks.addTask, 0, true);
    const newTask = Tasks.tasksArray.find((task) => task.index === 0);
    expect(newTask.completed).toBeTruthy();
  });

  test('Edit Task: Mark task as incomplete', () => {
    completedStatus(Tasks.tasksArray, Tasks.addTask, 0, false);
    const newTask = Tasks.tasksArray.find((task) => task.index === 0);
    expect(newTask.completed).toBeFalsy();
  });

  test('Edit Task: Mark task as incomplete', () => {
    const task1 = {
      index: 0,
      description: 'Task 1',
      completed: true,
    };
    const task2 = {
      index: 0,
      description: 'Task 1',
      completed: true,
    };
    const task3 = {
      index: 0,
      description: 'Task 1',
      completed: true,
    };
    Tasks.addTask(task1);
    Tasks.addTask(task2);
    Tasks.addTask(task3);

    clearCompleted(Tasks.tasksArray);
    const tasks = JSON.parse(localStorage.getItem('TASKS'));
    expect(tasks.length).toEqual(1);
  });
});
