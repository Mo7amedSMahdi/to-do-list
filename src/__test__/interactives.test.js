/**
 * @jest-environment jsdom
 */
import Task from '../modules/task.js';
import { completedStatus as completedStatus } from '../modules/interactives.js';

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
    console.log(Tasks.taskArray);
    completedStatus(Tasks.taskArray, Tasks.addTask, 0, true);
    const newTask = Tasks.taskArray.find((task) => task.index === 0);
    expect(newTask.completed).toBeTruthy();
  });

  test('Edit Task: Mark task as incomplete', () => {
    const task = {
      index: 0,
      description: 'Task 1',
      completed: false,
    };
    Tasks.addTask(task);
    console.log(Tasks.taskArray);
    completedStatus(Tasks.taskArray, Tasks.addTask, 0, false);
    const newTask = Tasks.taskArray.find((task) => task.index === 0);
    expect(newTask.completed).toBeFalsy();
  });
});
