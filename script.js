const taskList = document.getElementById("taskList");

function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${input.value}
        </span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    saveTasks();

    input.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function toggleTask(task) {
    task.classList.toggle("completed");
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();