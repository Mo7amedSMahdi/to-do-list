import './style.css';
import Task from './modules/task.js';
import {
  clearAllCompleted as ClearCompleted,
  markCompleted as Complete,
  checkCompleted as CheckCompleted,
  clearAll as Clear,
} from './modules/interactives.js';

const task = new Task();
task.render();
task.addTask();

CheckCompleted();
ClearCompleted();
Complete();
Clear();
