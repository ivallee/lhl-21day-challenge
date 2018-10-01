// function countRows - Count the rows in a grid

// Loop through the elements of the grid
  // Width = the length of the element
  // number of rows = length of the grid itself

const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

function countRows(){
  let width = 0;
  let rows = 0;
  for (let i = 0; i < GRID.length; i++) {
    const element = GRID[i];
    if (element.length > width) {
      width = element.length;
    }
    rows++;
  }
  return rows;
}

console.log(countRows(GRID));