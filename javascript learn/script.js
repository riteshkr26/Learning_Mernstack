const columns = [
    document.querySelector("#todo"),
    document.querySelector("#in-progress"),
    document.querySelector("#done")
];

let dragElement = null;

// --- 1. LOCAL STORAGE OPERATIONS ---

function saveTasksToLocalStorage() {
    const boardState = {};

    columns.forEach(column => {
        boardState[column.id] = [];
        column.querySelectorAll(".task").forEach(task => {
            boardState[column.id].push({
                title: task.querySelector("h2").innerText,
                desc: task.querySelector("p").innerText
            });
        });
    });

    localStorage.setItem("kanbanBoardTasks", JSON.stringify(boardState));
}

function loadTasksFromLocalStorage() {
    const savedData = localStorage.getItem("kanbanBoardTasks");
    if (!savedData) return;

    const boardState = JSON.parse(savedData);

    columns.forEach(column => {
        if (boardState[column.id]) {
            boardState[column.id].forEach(task => {
                createTaskElement(task.title, task.desc, column);
            });
        }
    });
}

// --- 2. CORE LOGIC ---

function updateColumnCounts() {
    columns.forEach(column => {
        const countElement = column.querySelector(".heading .right");
        if (countElement) {
            countElement.innerText = column.querySelectorAll(".task").length;
        }
    });
}

function createTaskElement(title, desc, targetColumn) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `<h2>${title}</h2><p>${desc}</p><button class="delete-button">Delete</button>`;
    
    div.addEventListener("dragstart", () => {
        dragElement = div;
    });

    div.querySelector(".delete-button").addEventListener("click", () => {
        div.remove();
        updateColumnCounts();
        saveTasksToLocalStorage();
    });

    targetColumn.appendChild(div);
}

function addDragEventsonColumn(column) {
    column.addEventListener("dragenter", () => column.classList.add("hover-over"));
    column.addEventListener("dragleave", () => column.classList.remove("hover-over"));
    column.addEventListener("dragover", (e) => e.preventDefault());
    
    column.addEventListener("drop", (e) => {
        e.preventDefault();
        if (dragElement) {
            column.appendChild(dragElement);
            column.classList.remove("hover-over");
            
            updateColumnCounts();
            saveTasksToLocalStorage(); // Saves current column state permanently
        }
    });
}

// Attach drop listeners to columns
columns.forEach(addDragEventsonColumn);

// --- 3. MODAL HANDLING ---

const modal = document.querySelector(".modal");
const addTaskButton = document.querySelector("#add-new-task");
const modalBg = document.querySelector(".modal .bg");
const togglemodalButton = document.querySelector("#toggle-modal");

if (modalBg) modalBg.addEventListener("click", () => modal.classList.remove("active"));
if (togglemodalButton) togglemodalButton.addEventListener("click", () => modal.classList.toggle("active"));

if (addTaskButton) {
    addTaskButton.addEventListener("click", () => {
        const taskTitleInput = document.querySelector("#task-input");
        const taskDescInput = document.querySelector("#task-description");
        
        const taskTitle = taskTitleInput.value.trim();
        const taskDescription = taskDescInput.value.trim();
       
        if (taskTitle === "") return;

        createTaskElement(taskTitle, taskDescription, columns[0]); // Defaults to 'todo'
    
        updateColumnCounts();
        saveTasksToLocalStorage();
        
        taskTitleInput.value = "";
        taskDescInput.value = "";
        modal.classList.remove("active");
    });
}

// --- 4. INITIALIZATION ---
loadTasksFromLocalStorage();
updateColumnCounts();
