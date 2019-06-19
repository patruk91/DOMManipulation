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

function changeStyle() {
    function getRandomNumbers(cellElements) {
        let totalCells = cellElements.length;
        return Math.floor(Math.random() * totalCells);
    }

    function changeStyleForOneCell(cellElements, randomNumber) {
        cellElements[randomNumber].className += " active";
    }

    function revertStyleForOneCell(randomNumber, cellElements) {
        setTimeout(function () {
            cellElements[randomNumber].className = "cell";
        }, 500);
    }

    let cellElements = document.querySelectorAll(".cell");
    setInterval(function () {
        let randomNumber = getRandomNumbers(cellElements);
        changeStyleForOneCell(cellElements, randomNumber);
        revertStyleForOneCell(randomNumber, cellElements);
    },500);
}

function main() {
    createGrid();
    changeStyle();
}

main();
