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
    let extraCountForArray = 1;
    if (document.querySelectorAll(".row").length + extraCountForArray < 10) {
        const singleRow = createSingleRow();
        const getForm = document.querySelector("form");
        getForm.appendChild(singleRow);
    }
}

function removeRow() {
    let item = document.getElementById(this.id);
    item.parentNode.removeChild(item);
}

function removeData() {
    let removeButtons = document.querySelectorAll(".row");
    for (let removeButton of removeButtons) {
        removeButton.addEventListener("click", removeRow);
        removeButton.addEventListener("click", displayAlertMessage);
    }
}

function countValue() {
    return {
        counter: 1,
        increment: function () {
            if (document.querySelectorAll(".row").length < 9) {
                this.counter++;
            }
        },
        getCounter: function () {
            return this.counter;
        }
    };
}

function displayAlertMessage() {
    let elements = document.querySelectorAll(".row").length + 1;
    console.log(elements);
    if (elements < 10) {
        document.getElementById("error").innerHTML = "";
    } else {
        document.getElementById("error").innerHTML = "Max 10 rows!".fontcolor("red");
    }
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

    function validationForAlertMessage() {
        let validations = document.querySelectorAll(".row, #add_row");
        for (let validation of validations) {
            validation.addEventListener("click", displayAlertMessage);
        }
    }

    const counterValue = counterForItems();
    addRow();
    removeRow();
    validationForAlertMessage();

}

main();

