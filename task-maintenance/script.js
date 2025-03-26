// tasks
const tasks = [
  {
    name: "Complete React project",
    isCompleted: false,
    dueDate: "2025-03-10",
  },
  {
    name: "Fix GitHub username issue",
    isCompleted: true,
    dueDate: "2025-03-05",
  },
  {
    name: "Buy groceries",
    isCompleted: false,
    dueDate: "2025-03-11",
  },
  {
    name: "Read JavaScript book",
    isCompleted: false,
    dueDate: "2025-03-15",
  },
  {
    name: "Plan weekend trip",
    isCompleted: true,
    dueDate: "2025-03-07",
  },
  {
    name: "Refactor login component",
    isCompleted: false,
    dueDate: "2025-03-25",
  },
  {
    name: "Attend team meeting",
    isCompleted: true,
    dueDate: "2025-03-08",
  },
];

const createTable = (tasks) => {
  const container = document.getElementById("table");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tableRow = document.createElement("tr");
  const column = ["NAME", "COMPLETED", "DUE DATE"];
  column.forEach((col) => {
    const th = document.createElement("th");
    th.innerText = col;
    tableRow.appendChild(th);
  });
  thead.appendChild(tableRow);
  table.appendChild(thead);

  //   create table body
  const tbody = document.createElement("tbody");
  tasks.forEach((task) => {
    const tr = document.createElement("tr");

    Object.entries(task).forEach(([key, value]) => {
      const td = document.createElement("td");
      if (key === "dueDate") {
        td.innerText = formateDate(value);
      } else if (key === "isCompleted") {
        td.innerText = value ? "Yes" : "No";
      } else {
        td.innerText = value;
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
};

// console.log("Incompleted tasks");
function incomplete(tasks) {
  const incompleted = tasks.filter((task) => !task.isCompleted);
  createTable(incompleted);
}

// "overdue tasks"
const overDue = function (tasks) {
  const overDueTasks = tasks
    .map((task) => {
      const date = new Date();
      const today = date.toISOString().split("T")[0];
      if (!task.isCompleted && today > task.dueDate) {
        return {
          name: `Overdue ${task.name}`,
          isCompleted: task.isCompleted,
          overDue: formateDate(task.dueDate),
        };
      }
      return null;
    })
    .filter((task) => task !== null);
  createTable(overDueTasks);
};
// completed tasks
const completedTasks = tasks.filter((task) => task.isCompleted);

// formate date
function formateDate(stringDate) {
  const date = new Date(stringDate);
  let day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  return `${day}-${month}-${year}`;
}

const selectElement = document.getElementById("dropdown");
let selectValue = selectElement.value;
if (selectValue == "all") {
  createTable(tasks);
}

selectElement.addEventListener("change", () => {
  const Tablecontainer = document.getElementById("table");
  Tablecontainer.innerHTML = "";
  selectValue = selectElement.value;
  console.log(selectValue);
  if (selectValue == "incomplete") {
    incomplete(tasks);
  } else if (selectValue == "completed") {
    createTable(completedTasks);
  } else if (selectValue == "overdue") {
    overDue(tasks);
  } else {
    createTable(tasks);
  }
});
