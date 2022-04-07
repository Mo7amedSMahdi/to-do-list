const listContainer = document.querySelector('.nav--list');
let deletedTask = false;

const displayTasks = (tasks, container) => {
  tasks.forEach((task) => {
    const taskElement = `<li data-id="${task.index}">
                    <div class="list__item">
                        <input class="checkBox" type="checkbox" id=${task.index} name=${task.description} value=${task.description}>
                        <input type="text" id="${task.index}" value="${task.description}">
                        <button type="button"  class="btn" data-id="${task.index}">
                            <i class="icon icon--dots"></i>
                            <i class="icon icon--trash hidden"></i>
                        </button>
                    </div>
                </li>`;
    container.innerHTML += taskElement;
  });
};

const removeTask = (taskArray, addTask, id) => {
  const index = parseInt(id, 10);
  taskArray.splice(index, 1);
  taskArray.forEach((task, i) => {
    task.index = i;
  });
  addTask();
  window.location.reload();
};

const deletTask = () => {
  const delIcons = document.querySelectorAll('.icon--trash');
  delIcons.forEach((delIcon) => {
    delIcon.addEventListener('mousedown', () => {
      deletedTask = true;
    });
  });
};

const editTasks = (tasks, addTask) => {
  const inputs = listContainer.querySelectorAll('input[type="text"]');
  let newDesc = '';

  inputs.forEach((item) => {
    item.addEventListener('focusin', () => {
      const li = item.parentElement;
      const iconDots = li.querySelector('.icon--dots');
      const iconTrash = li.querySelector('.icon--trash');
      iconTrash.classList.remove('hidden');
      iconDots.classList.add('hidden');
      li.classList.add('active');
      item.classList.add('active');
      item.addEventListener('input', () => {
        newDesc = item.value;
      });
    });

    item.addEventListener('focusout', () => {
      const li = item.parentElement.parentNode;
      const div = li.querySelector('.list__item');
      const iconDots = li.querySelector('.icon--dots');
      const iconTrash = li.querySelector('.icon--trash');
      iconTrash.classList.add('hidden');
      iconDots.classList.remove('hidden');
      div.classList.remove('active');
      item.classList.remove('active');
      const index = item.getAttribute('id');
      if (!deletedTask) {
        if (newDesc.trim()) {
          tasks[index].description = newDesc.trim();
          addTask();
        }
      } else {
        removeTask(tasks, addTask, index);
      }

      newDesc = '';
      deletedTask = false;
    });
  });
};

export {
  displayTasks, editTasks, deletTask, removeTask,
};
