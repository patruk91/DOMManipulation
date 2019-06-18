function addSingleRow() {
    const extraArrayLength = 1;
    let numberOfItems = document.querySelectorAll("label").length + extraArrayLength;
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
    if (numberOfItems <= 10) {

        const singleRow = createSingleRow();
        const getForm = document.querySelector("form");
        getForm.appendChild(singleRow);

    } else {
        alert("Max 10 rows!")
    }
}

function removeRow() {
    let item = document.getElementById(this.id);
    item.parentNode.removeChild(item);
}

function removeData() {
    let removeButtons = document.querySelectorAll(".row");
    console.log(removeButtons);
    for (let removeButton of removeButtons) {
        removeButton.addEventListener("click", removeRow);
    }
}

function main() {
    let rowButton = document.querySelector("#add_row");
    rowButton.addEventListener("click", addSingleRow);

    let onChangeAddRow = document.querySelector("#add_row");
    onChangeAddRow.addEventListener("click", removeData)





}

main();
// <label for="item_1">Item 1:</label><input type="text" name="item_1" id="item_1"/>
// document.querySelector("form").insertAdjacentHTML("beforeend", '<br>');
