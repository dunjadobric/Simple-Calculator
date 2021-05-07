let firstNumber = document.getElementById("firstNum");
let secondNumber = document.getElementById("secondNum");
let res = document.getElementById("result");

function addFunc() {
    res.value = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);

    if (isNaN(parseFloat(firstNumber.value))) {
        alert("Enter number in first field!");
    }

    if (isNaN(parseFloat(secondNumber.value))) {
        alert("Enter number in second field!");
    }

    emptyInput();
    isNotNumber();
};


function subFunc() {
    res.value = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);

    if (isNaN(parseFloat(firstNumber.value))) {
        alert("Enter number in first field!");
    }

    if (isNaN(parseFloat(secondNumber.value))) {
        alert("Enter number in second field!");
    }

    emptyInput();
    isNotNumber();
};

function multFunc() {
    res.value = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);

    if (isNaN(parseFloat(firstNumber.value))) {
        alert("Enter number in first field!");
    }

    if (isNaN(parseFloat(secondNumber.value))) {
        alert("Enter number in second field!");
    }

    emptyInput();
    isNotNumber();
};

function divideFunc() {
    res.value = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);

    if (isNaN(parseFloat(firstNumber.value))) {
        alert("Enter number in first field!");
    }

    if (isNaN(parseFloat(secondNumber.value))) {
        alert("Enter number in second field!");
    }

    emptyInput();
    isNotNumber();
};

function emptyInput() {
    if (!parseFloat(firstNumber.value) || !parseFloat(secondNumber.value)) {
        alert("Input fields can't be empty!");
    }
};

function isNotNumber() {
    if (res.value === "NaN") {
        res.value = "Please enter number...";
    }
};

function resetFunc() {
    res.value = "";
};