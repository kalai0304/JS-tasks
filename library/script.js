// Array of Book objects
const books = [
  { title: "The Alchemist", author: "Paulo Coelho", isAvailable: true },
  { title: "Atomic Habits", author: "James Clear", isAvailable: false },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", isAvailable: true },
  { title: "The Power of Now", author: "Eckhart Tolle", isAvailable: true },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    isAvailable: false,
  },
  { title: "The 5 AM Club", author: "Robin Sharma", isAvailable: true },
  { title: "Think and Grow Rich", author: "Napoleon Hill", isAvailable: false },
  {
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    author: "Héctor García",
    isAvailable: true,
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    isAvailable: false,
  },
  { title: "Deep Work", author: "Cal Newport", isAvailable: true },
  { title: "Start with Why", author: "Simon Sinek", isAvailable: true },
  {
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    isAvailable: false,
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    isAvailable: true,
  },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    isAvailable: false,
  },
  { title: "You Are a Badass", author: "Jen Sincero", isAvailable: true },
  { title: "Grit", author: "Angela Duckworth", isAvailable: false },
  {
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    isAvailable: true,
  },
  { title: "Can't Hurt Me", author: "David Goggins", isAvailable: false },
  {
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    isAvailable: true,
  },
  { title: "The Lean Startup", author: "Eric Ries", isAvailable: false },
];

// create table
const createTable = (books) => {
  const container = document.getElementById("booksTable");

  const table = document.createElement("table");
  const thead = document.createElement("thead");

  const tableRow = document.createElement("tr");

  const colum = ["title", "author", "availability"];

  colum.forEach((col) => {
    const th = document.createElement("th");
    th.innerText = col.toUpperCase();
    tableRow.appendChild(th);
  });
  thead.appendChild(tableRow);
  table.appendChild(thead);

  // tbody
  const tbody = document.createElement("tbody");

  // const bookVal = Object.keys(books[0]);

  books.forEach((item, index) => {
    const tr = document.createElement("tr");

    [item.title, item.author].forEach((val) => {
      const td = document.createElement("td");
      td.innerText = val;
      tr.appendChild(td);
    });
    addButton(tr, item, index);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
};
function addButton(row, item, index) {
  const td = document.createElement("td");
  const button = document.createElement("button");
  button.innerText = "Check out";

  button.addEventListener("click", () => {
    handleCheckOut(item, index);
  });

  td.appendChild(button);
  row.appendChild(td);
}

function handleCheckOut(item, index) {
  let prompt = document.getElementById("promt");
  if (item.isAvailable) {
    prompt.innerText = `You have checked out ${item.title}`;
    item.isAvailable = false;
  } else {
    prompt.innerText = `Sorry, ${item.title} is not available`;
  }
}

createTable(books);
