function addRow() {
    const getForm = document.querySelector("form");
    let numberOfItems = document.querySelectorAll("label").length + 1;
    function addLabel() {
        const labelRow = document.createElement("label");
        labelRow.setAttribute("for", `item_${numberOfItems}`);
        labelRow.innerHTML = `Item ${numberOfItems}:`;
        getForm.appendChild(labelRow);
    }
    function addInput() {
        const inputRow = document.createElement("input");
        inputRow.setAttribute("type", "text");
        inputRow.setAttribute("name", `item_${numberOfItems}`);
        inputRow.setAttribute("id", `item_${numberOfItems}`);
        getForm.appendChild(inputRow);
    }

    function addRemoveButton() {
        const removeButton = document.createElement("button");
        removeButton.setAttribute("class", `remove-row`);
        removeButton.setAttribute("id", `remove_${numberOfItems}`);
        removeButton.innerHTML = "Remove";
        getForm.appendChild(removeButton);
        document.querySelector("form").insertAdjacentHTML("beforeend", '<br>');
    }

    addLabel();
    addInput();
    addRemoveButton();
}


function main() {
    let rowButton = document.querySelector("#add_row");
    rowButton.addEventListener("click", addRow);
}

main();
// <label for="item_1">Item 1:</label><input type="text" name="item_1" id="item_1"/>
