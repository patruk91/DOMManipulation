// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();
const moves = {
    '97': "ArrowLeft",
    '115': "ArrowDown",
    '119': "ArrowUp",
    '100': "ArrowRight"
};



function activeOrDeactivateCell(event) {
    function activeOrDeactivateCellOnClick() {
        function unmarkPreviousActiveCells() {
            let activeCell = gridArray.find(markedCell => markedCell.id === "marked");
            if (activeCell !== undefined && activeCell.id === "marked") {
                activeCell.className = "cell";
                activeCell.removeAttribute("id");
            }
        }

        function getCellClassName() {
            let currentCellIndex = gridArray.indexOf(event.currentTarget);
            return grid[currentCellIndex].className;
        }

        function activateCellOnClick() {
            let cellActiveName = getCellClassName();
            if (cellActiveName === "cell") {
                event.currentTarget.className = "cell active";
                event.currentTarget.id = "marked";
            }
        }

        function deactivateCellOnClick() {
            if (cellActiveName === "cell active") {
                this.className = "cell"
            }
        }

        let grid = document.querySelectorAll(".cell");
        let gridArray = Array.from(grid);
        let cellActiveName = getCellClassName();

        unmarkPreviousActiveCells(event.currentTarget);
        activateCellOnClick();
        deactivateCellOnClick.call(this);
    }

    function activeOrDeactivateCellOnPressKeyArrow() {
        document.addEventListener("keydown", moveActiveSquare);
        let evt = new KeyboardEvent('keydown');
        document.dispatchEvent(evt);
    }

    activeOrDeactivateCellOnClick.call(this);
    activeOrDeactivateCellOnPressKeyArrow();
}

function moveActiveSquare(event) {
    function updateCellStatus(moveHorizontally) {
        let cells = document.querySelectorAll(".cell");
        let arrayOfCells = Array.from(cells);
        let cellIndex = arrayOfCells.indexOf(markedCell);

        markedCell.className = "cell";
        cells[cellIndex + moveHorizontally].className = "cell active";
    }

    function moveCellByPressArrow() {
        let moveHorizontally = 1;
        let moveVertically = 10;
        switch (event.key) {
            case "ArrowRight":
                updateCellStatus(moveHorizontally);
                break;
            case "ArrowLeft":
                updateCellStatus(-moveHorizontally);
                break;
            case "ArrowUp":
                updateCellStatus(-moveVertically);
                break;
            case "ArrowDown":
                updateCellStatus(moveVertically);
                break;
        }
    }

    let markedCell = document.getElementsByClassName("cell active")[0];
    if (markedCell !== undefined && markedCell.className === "cell active") {
        moveCellByPressArrow();
    }
}

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

function changeCellStatus() {
    let grid = document.querySelectorAll(".cell");
    for (let cell of grid) {
        cell.addEventListener("click", activeOrDeactivateCell);
    }
}

function main() {
    createGrid();
    changeCellStatus();


}

main();
