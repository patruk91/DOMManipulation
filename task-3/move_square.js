// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();
const moves = {
    '97': "ArrowLeft",
    '115': "ArrowDown",
    '119': "ArrowUp",
    '100': "ArrowRight"
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

function changeColorOnClick(event) {
    function markCellAsActiveOrDeactivate() {
        function getCellClassName() {
            let currentCellIndex = gridArray.indexOf(event.currentTarget);
            return grid[currentCellIndex].className;
        }

        let cellActiveName = getCellClassName();
        if(cellActiveName === "cell active") {
            event.currentTarget.className = "cell";
        } else if (cellActiveName === "cell") {
            event.currentTarget.className = "cell active";
            event.currentTarget.id = "marked";
        }
    }

    let grid = document.querySelectorAll(".cell");
    let gridArray = Array.from(grid);
    unmarkPreviousActiveCells();
    markCellAsActiveOrDeactivate();


    function unmarkPreviousActiveCells() {
        for (let cell of grid) {
            if (cell.id === "marked") {
                cell.className = "cell";
                cell.removeAttribute("id");
                return;
            }
        }
    }





    document.addEventListener("keydown", moveActiveSquare);
    let evt = new KeyboardEvent('keydown');
    document.dispatchEvent (evt);
}

function moveActiveSquare(event) {
    let markedCell = document.getElementsByClassName("cell active")[0];
    // console.log(event.key === "ArrowRight");

    let cells = document.querySelectorAll(".cell");
    let arrayOfCells = Array.from(cells);
    let cellIndex = arrayOfCells.indexOf(markedCell);

    if (markedCell !== undefined && markedCell.className === "cell active") {
        let moveHorizontally = 1;
        let moveVertically = 10;
        switch (event.key) {
            case "ArrowRight":
                markedCell.className = "cell";
                cells[cellIndex + moveHorizontally].className = "cell active";
                break;
            case "ArrowLeft":
                markedCell.className = "cell";
                cells[cellIndex - moveHorizontally].className = "cell active";
                break;
            case "ArrowUp":
                markedCell.className = "cell";
                cells[cellIndex - moveVertically].className = "cell active";
                break;
            case "ArrowDown":
                markedCell.className = "cell";
                cells[cellIndex + moveVertically].className = "cell active";
                break;
        }
    }


}

function main() {
    createGrid();
    let grid = document.querySelectorAll(".cell");

    for(let cell of grid) {
        cell.addEventListener("click", changeColorOnClick);
    }



}

main();
