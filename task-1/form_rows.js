function addSingleRow(event) {
    let counter = event.target.counterData.getCounter();
    function createLabel() {
        const labelRow = document.createElement("label");
        labelRow.setAttribute("for", `item_${counter}`);
        labelRow.innerHTML = `Item ${counter}:`;
        return labelRow;
    }

    function createInput() {
        const inputRow = document.createElement("input");
        inputRow.setAttribute("type", "text");
        inputRow.setAttribute("name", `item_${counter}`);
        inputRow.setAttribute("id", `item_${counter}`);
        return inputRow;
    }

    function createRemoveButton() {
        const removeButton = document.createElement("button");
        removeButton.setAttribute("class", `remove-row`);
        removeButton.setAttribute("id", `remove_${counter}`);
        removeButton.innerHTML = "Remove";
        return removeButton;
    }

    function createSingleRow() {
        const singleRow = document.createElement("div");
        singleRow.className = `row`;
        singleRow.id = `id_${counter}`;
        singleRow.appendChild(createLabel());
        singleRow.appendChild(createInput());
        singleRow.appendChild(createRemoveButton());
        return singleRow;
    }
    let elements = document.querySelectorAll(".row").length + 1;
    if (elements < 10) {
        const singleRow = createSingleRow();
        const getForm = document.querySelector("form");
        getForm.appendChild(singleRow);

    } else {
        document.getElementById("error").innerHTML = "Max 10 rows!".fontcolor("red");

    }
}

function removeRow() {
    document.getElementById("error").innerHTML = "";
    let item = document.getElementById(this.id);
    item.parentNode.removeChild(item);
}

function removeData() {
    let removeButtons = document.querySelectorAll(".row");
    for (let removeButton of removeButtons) {
        removeButton.addEventListener("click", removeRow);
    }
}

function countValue() {
    return {
        counter: 1,
        increment: function () {
            console.log(document.querySelectorAll(".row").length);
            if (document.querySelectorAll(".row").length < 9) {
                this.counter++;
            }
        },
        getCounter: function () {
            return this.counter;
        }
    };
}

function main() {
    function counterForItems() {
        const counterValue = countValue();
        let incrementCounter = document.querySelector("#add_row");
        incrementCounter.addEventListener("click", () => counterValue.increment(), false);
        return counterValue;
    }

    function addRow() {
        let rowButton = document.querySelector("#add_row");
        rowButton.addEventListener("click", addSingleRow, false);
        rowButton.counterData = counterValue;
    }

    function removeRow() {
        let onChangeAddRow = document.querySelector("#add_row");
        onChangeAddRow.addEventListener("click", removeData);
    }

    const counterValue = counterForItems();
    addRow();
    removeRow();
}

main();

