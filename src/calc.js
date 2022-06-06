const tableContainer = document.getElementById("table-container");

function create_board() {
  // Clear previous table before creating a new one
  let child = tableContainer.lastElementChild;
  while (child) {
    tableContainer.removeChild(child);
    child = tableContainer.lastElementChild;
  }

  const p = document.createElement("p");
  const p_text = document.createTextNode("Table created.");
  p.appendChild(p_text);
  tableContainer.appendChild(p);

  const table = document.createElement("table");

  const row = parseInt(document.getElementById("row").value);
  const col = parseInt(document.getElementById("col").value);

  for (let i = 0; i < row; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < col; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  tableContainer.appendChild(table);
}
