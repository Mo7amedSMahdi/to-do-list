const clearAllCompleted = (tasksArray) => {
  const clearAllBtn = document.querySelector('.clear--all');
  clearAllBtn.addEventListener('click', () => {
    tasksArray = tasksArray.filter((task) => task.completed === false);
    tasksArray.forEach((task, i) => {
      task.index = i;
    });
    localStorage.setItem('TASKS', JSON.stringify(tasksArray));
    window.location.reload();
  });
};

const markCompleted = (tasksArray, addTask) => {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change', () => {
      const liElement = checkBox.parentNode.parentElement;
      const input = liElement.querySelector('input[type="text"]');
      const index = parseInt(input.getAttribute('id'), 10);
      if (checkBox.checked) {
        input.classList.add('completed');
        tasksArray[index].completed = true;
        addTask();
      } else {
        input.classList.remove('completed');
        tasksArray[index].completed = false;
        addTask();
      }
    });
  });
};

const checkCompleted = (tasksArray) => {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  checkBoxes.forEach((checkBox) => {
    const index = checkBox.getAttribute('id');
    const liElement = checkBox.parentNode.parentElement;
    const input = liElement.querySelector('input[type="text"]');
    if (tasksArray[index].completed) {
      checkBox.checked = true;
      input.classList.add('completed');
    }
  });
};

const clearAll = () => {
  const btnRefresh = document.querySelector('.btn--refresh');
  btnRefresh.addEventListener('click', () => {
    localStorage.removeItem('TASKS');
    window.location.reload();
  });
};

export {
  clearAllCompleted, markCompleted, checkCompleted, clearAll,
};
