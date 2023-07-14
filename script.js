//create default number of cells in grid
const gridContainer = document.querySelector(".grid-container");
let gridSize = 16;
for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);
}

//change color of cell on hover 
const colorCells = function colorCells() {
const cells = document.querySelectorAll('.grid')
cells.forEach((cell) => {
    cell.addEventListener('mouseover', function (e) {
        e.target.style.background = 'lightblue';
    })
})
}
colorCells ();


//prompts for new grid size
const btn = document.querySelector('button')
const removeGrid = function removeGrid () {
    const oldGrid = document.querySelectorAll('.grid');
    oldGrid.forEach((old) => {
        old.remove();
    })

}

//removes old grid, creates new grid, resizes cells based off user input
btn.addEventListener('click', function newGrid () {
    gridSize = prompt("Enter New Grid Size", "16");
    if (gridSize <=100 && gridSize > 0) {
        removeGrid();
        for (let i = 0; i < gridSize * gridSize; i++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            gridContainer.appendChild(grid);
            let newGrid = (800 / gridSize + "px");
            grid.style.setProperty("height", newGrid);
            grid.style.setProperty("width", newGrid);
        }
    colorCells()
    }
    else if (gridSize == 0)  {
        alert("No new grid found")
    }
    else alert("Input exceeds supported grid size") 
})



