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


function main() {

}

main();
