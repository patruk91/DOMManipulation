function addSingleRow() {
    let numberOfItems = document.querySelectorAll("label").length + 1;
    function createLabel() {
        const labelRow = document.createElement("label");
        labelRow.setAttribute("for", `item_${numberOfItems}`);
        labelRow.innerHTML = `Item ${numberOfItems}:`;
        return labelRow;
    }

    function createInput() {
        const inputRow = document.createElement("input");
        inputRow.setAttribute("type", "text");
        inputRow.setAttribute("name", `item_${numberOfItems}`);
        inputRow.setAttribute("id", `item_${numberOfItems}`);
        return inputRow;
    }

    function createRemoveButton() {
        const removeButton = document.createElement("button");
        removeButton.setAttribute("class", `remove-row`);
        removeButton.setAttribute("id", `remove_${numberOfItems}`);
        removeButton.innerHTML = "Remove";
        return removeButton;
    }

    function createSingleRow() {
        const singleRow = document.createElement("div");
        singleRow.className = `row`;
        singleRow.id = `id_${numberOfItems}`;
        singleRow.appendChild(createLabel());
        singleRow.appendChild(createInput());
        singleRow.appendChild(createRemoveButton());
        return singleRow;
    }
    const singleRow = createSingleRow();
    const getForm = document.querySelector("form");
    getForm.appendChild(singleRow);
}

function removeRow() {
    console.log(this.id);
    let item = document.getElementById(this.id);
    console.log(item);
    item.parentNode.removeChild(item);
}

function remove() {
    let removeButtons = document.querySelectorAll(".row");
    console.log(removeButtons);
    for (let removeButton of removeButtons) {
        removeButton.addEventListener("click", removeRow);
    }
}

function main() {
    let rowButton = document.querySelector("#add_row");
    rowButton.addEventListener("click", addSingleRow);

    let onChange = document.querySelector("#add_row");
    onChange.addEventListener("click", remove)





}

main();
// <label for="item_1">Item 1:</label><input type="text" name="item_1" id="item_1"/>
// document.querySelector("form").insertAdjacentHTML("beforeend", '<br>');
