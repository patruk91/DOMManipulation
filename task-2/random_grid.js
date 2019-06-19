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

function createGrid() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 10; i++) {
        const singleRow = createSingleRow();
        container.appendChild(singleRow);
    }
}

function getRandomNumbers(cellElements) {
    let totalCells = cellElements.length;
    return Math.floor(Math.random() * totalCells);
}

function changeStyleForOneCell() {
    let cellElements = document.querySelectorAll(".cell");
    let randomNumber = getRandomNumbers(cellElements);
    cellElements[randomNumber].className += " active";

    setInterval(function () {
        revertStyleForOneCell(randomNumber, cellElements);
    }, 500);
}

function revertStyleForOneCell(randomNumber, cellElements) {
    cellElements[randomNumber].className = "cell";
}

function main() {
    createGrid();

    setInterval(function () {
        changeStyleForOneCell();
    }, 500);


}

main();
