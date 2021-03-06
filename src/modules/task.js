import Form from './form.js';

import {
  displayTasks as Display,
  inputEvents as Edit,
  deletTask as Delete,
} from './functionalities.js';

const listContainer = document.querySelector('.nav--list');

class Task {
  constructor() {
    this.tasksArray = JSON.parse(localStorage.getItem('TASKS')) || [];
  }

  render = () => {
    Form(this.addTask, this.tasksArray);

    Display(this.tasksArray, listContainer);

    Edit(this.tasksArray, this.addTask, listContainer);
    Delete(this.tasksArray, this.addTask);
  };

  addTask = (task) => {
    if (task) {
      this.tasksArray.push(task);
      localStorage.setItem('TASKS', JSON.stringify(this.tasksArray));
    } else {
      localStorage.setItem('TASKS', JSON.stringify(this.tasksArray));
    }
  };
}

export default Task;
