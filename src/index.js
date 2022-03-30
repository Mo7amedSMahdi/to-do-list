import './style.css';
import Form from './modules/form.js';

import {
  addTask as Add,
  editTasks as Edit,
  deletTask as Delete,
} from './modules/functionalities.js';

class Task {
  constructor(taskArray) {
    this.taskArray = taskArray;
  }

  render = () => {
    Form(this.addTask, this.taskArray);

    Add(this.taskArray);

    Edit(this.taskArray, this.addTask);
    Delete(this.taskArray, this.addTask);
  };

  addTask = (task) => {
    if (task) {
      this.taskArray.push(task);
      localStorage.setItem('TASKS', JSON.stringify(this.taskArray));
      this.render();
    } else {
      localStorage.setItem('TASKS', JSON.stringify(this.taskArray));
    }
  };
}

const task = new Task(JSON.parse(localStorage.getItem('TASKS') || []));
task.render();
task.addTask();
