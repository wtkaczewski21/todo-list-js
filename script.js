const taskInput = document.querySelector(".new-task-input");
const taskButton = document.querySelector(".new-task-btn");
const tasksList = document.querySelector(".tasks-list");

taskButton.addEventListener("click", addTask);
tasksList.addEventListener("click", deleteTask);

function addTask(event) {
  event.preventDefault();
  if (taskInput.value === "") return;
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  newTask.classList.add("task-item");
  taskDiv.append(newTask);
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteButton.classList.add("delete-btn");
  taskDiv.append(deleteButton);
  tasksList.append(taskDiv);
  taskInput.value = "";
}

function deleteTask(event) {
  const item = event.target;
  if (item.classList[0] === "delete-btn") {
    const task = item.parentElement;
    //Delete animation
    task.classList.add("fall");
    task.addEventListener("transitionend", function () {
      task.remove();
    });
  }
}
