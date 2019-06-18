function addRow() {
    function addLabel() {
        const getForm = document.querySelector("form");
        const labelRow = document.createElement("label");
        labelRow.setAttribute("for", "item_2");
        labelRow.innerHTML = "Item 2:";
        getForm.appendChild(labelRow);
    }
}

function main() {
    let rowButton = document.querySelector("#add_row");
    rowButton.addEventListener("click", addRow)
}

main();
// <label for="item_1">Item 1:</label><input type="text" name="item_1" id="item_1"/>
// document.querySelector("form").insertAdjacentHTML("beforeend", '<br>');
