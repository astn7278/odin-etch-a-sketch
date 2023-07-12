const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16 * 16; i++) {
    const cells = document.createElement("div");
    cells.classList.add("cells");
    gridContainer.appendChild(cells);
}

