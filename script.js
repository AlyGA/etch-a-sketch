// Initial values
const grid = document.querySelector(".grid");
const restartButton = document.getElementById("restart");
let row = null;
let column = null;

const playGame = function () {
  const cellCount = 26;
  // Loops through the cellCount's array and adds a new div each time to make a grid.
  if (cellCount <= 100) {
    for (let i = 0; i < cellCount; i++) {
      row = document.createElement("div");
      row.classList.add("row");

      // Add a column of divs to each row of divs. Make sure there's no overlap.
      for (let j = 0; j < cellCount - 3; j++) {
        column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);

        // Add function to leave color once a user hovers over the grid
        column.addEventListener("click", function () {
          this.classList.add("column-hover");
          this.classList.remove("column");
        });
      }
      grid.appendChild(row);
    }
  } else {
    alert("Number is too high! Please try again!");
    playGame();
  }
};

playGame();

// Restarting game when button is pressed by removing original rows and calling the playGame() function again
restartButton.addEventListener("click", () => {
  document.querySelectorAll(".row").forEach((e) => e.parentNode.removeChild(e));

  playGame();
});
