"use strict";
import { createElementWithText } from "./util.js";
// const sample = require("./util");

const tableContainer = document.getElementById("table-container");

export function create_board() {
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

  //   let id = 0;
  for (let i = 0; i < row; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < col; j++) {
      const td = document.createElement("td");
      td.setAttribute("id", `cell_${i}_${j}`);

      // Add onclick eventListener
      td.addEventListener("click", function () {
        let cell_color = document.getElementById(`cell_${i}_${j}`).style
          .backgroundColor;

        if (!cell_color) {
          document.getElementById(`cell_${i}_${j}`).style.backgroundColor =
            "black";
        } else {
          document.getElementById(`cell_${i}_${j}`).style.backgroundColor =
            "white";
        }
      });

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  // const start_button = document.createElement("button");
  // const start_text = document.createTextNode();

  tableContainer.appendChild(table);
}

const send_button = document.getElementById("send");
send_button.addEventListener("click", create_board);
