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

    function getCellActiveName() {
        let arrayOfCells = Array.from(cells);
        let cellIndex = arrayOfCells.indexOf(event.currentTarget);
        return cells[cellIndex].className;
    }

    function markEachCell() {
        for (let cell of cells) {
            cell.className = "cell";
        }
    }

    function markCellAsActive() {
        if (this.className === "cell") {
            this.className = "cell active"
        }
    }

    function deactivateActiveCellWhenClickAgain() {
        if (cellActiveName === "cell active") {
            this.className = "cell"
        }
    }

    let cells = document.querySelectorAll(".cell");
    let cellActiveName = getCellActiveName();
    markEachCell();
    markCellAsActive.call(this);
    deactivateActiveCellWhenClickAgain.call(this);

    document.addEventListener("keydown", moveActiveSquare);
    let evt = new KeyboardEvent('keydown');
    document.dispatchEvent (evt);
}

function moveActiveSquare(event) {
    let markedCell = document.getElementsByClassName("cell active")[0];
    console.log(event.key === "ArrowRight");

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
    let cells = document.querySelectorAll(".cell");

    for(let cell of cells) {
        cell.addEventListener("click", changeColorOnClick);
    }



}

main();
