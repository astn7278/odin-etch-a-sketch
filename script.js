const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16 * 16; i++) {
    const cells = document.createElement("div");
    cells.classList.add("cells");
    gridContainer.appendChild(cells);
}
//create number of cells in grid

const cells = document.querySelectorAll('.cells')

cells.forEach((cell) => {
    cell.addEventListener('mouseover', function (e) {
        e.target.style.background = 'lightblue';
    })
})
//change color of cell on hover 

