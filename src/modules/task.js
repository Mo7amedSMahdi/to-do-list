import Form from './form.js';
import {
  clearAllCompleted as ClearCompleted,
  markCompleted as Complete,
  checkCompleted as markAllCompleted,
  clearAll as Clear,
} from './interactives.js';

import {
  displayTasks as Display,
  editTasks as Edit,
  deletTask as Delete,
} from './functionalities.js';

const listContainer = document.querySelector('.nav--list');

class Task {
  constructor() {
    this.taskArray = JSON.parse(localStorage.getItem('TASKS')) || [];
  }

  render = () => {
    Form(this.addTask, this.taskArray);

    Display(this.taskArray, listContainer);

    Edit(this.taskArray, this.addTask);
    Delete(this.taskArray, this.addTask);

    ClearCompleted(this.taskArray);

    Complete(this.taskArray, this.addTask);

    markAllCompleted(this.taskArray);

    Clear();
  };

  addTask = (task) => {
    if (task) {
      this.taskArray.push(task);
      localStorage.setItem('TASKS', JSON.stringify(this.taskArray));
    } else {
      localStorage.setItem('TASKS', JSON.stringify(this.taskArray));
    }
  };
}

export default Task;
