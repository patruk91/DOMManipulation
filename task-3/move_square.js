// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();
const moves = {
    '97': "moveLeft",
    '115': "moveDown",
    '119': "moveUp",
    '100': "moveRight"
};

function createGrid() {
    function createSingleRow() {
        const singleRow = document.createElement("p");
        singleRow.classList.add("row");

        for (let i = 0; i < 10; i++) {
            const singleGrid = document.createElement("div");
            singleGrid.classList.add("cell");
            singleRow.appendChild(singleGrid);
        }
        return singleRow;
    }

    const container = document.querySelector(".container");
    for (let i = 0; i < 10; i++) {
        const singleRow = createSingleRow();
        container.appendChild(singleRow);
    }
}


function main() {
    createGrid()
}

main();
