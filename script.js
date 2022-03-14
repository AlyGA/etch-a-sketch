// Add Javascript soon

// Initial values
const grid = document.querySelector(".grid");
let row;
let column;
let cellCount = 25;

// Loops through the cellCount's array and adds a new div each time to make a grid.
for (let i = 0; i < cellCount; i++) {
  row = document.createElement("div");
  row.classList.add("row");

  // Add a column of divs to each row of divs. Make sure there's no overlap.
  for (let j = 0; j < cellCount - 3; j++) {
    column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);

    // Add function to leave color once a user hovers over the grid
    column.addEventListener("mouseenter", function () {
      this.classList.add("column-hover");
      this.classList.remove("column");
    });
  }
  grid.appendChild(row);
}
