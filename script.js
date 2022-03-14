// Add Javascript soon

// Initial values
const grid = document.querySelector(".grid");
let cellCount = 18;

// Loops through the cellCount's array and adds a new div each time to make a grid.
for (let i = 0; i < cellCount; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  // Add a column of divs to each row of divs. Make sure there's no overlap.
  for (let j = 0; j < cellCount; j++) {
    const column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);
  }
  grid.appendChild(row);
}
