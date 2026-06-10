const app = document.querySelector("#app");

app.innerHTML = `
  <div class="container">
    <h1>Трекер завдань</h1>

    <div class="input-section">
      <input
        type="text"
        id="taskInput"
        placeholder="Введіть завдання..."
      />

      <button id="addBtn">
        Додати
      </button>
    </div>

    <ul id="taskList"></ul>

    <p>
      Натисніть на завдання, щоб позначити його виконаним
    </p>
  </div>
`;

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);

    input.value = "";
}