let currentResult = "";
let operation = "";
let number1 = "";
let number2 = "";

function add(number1, number2) {
    return (number1 + number2);
}

function substract(number1, number2) {
    return (number1 - number2);
}

function multiply(number1, number2) {
    return (number1 * number2);
}

function divide(number1, number2) {
    return (number1 / parseFloat(number2));
}

function modulo(number1, number2) {
    return (number1 / parseFloat(number2));
}

function operate(number1, number2, operation) {
    switch (operation) {
        case '+':
            return add(number1, number2);
        case '-':
            return substract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
        case '%':
            return modulo(number1, number2);
    }
}

function handleOperation(choosedOperation) {
    if (operation !== "" && number1 !== "") {
        if (number2 === "")
            number2 = number1;
        currentResult = operate(parseInt(number1), parseInt(number2), operation);
        number1 = currentResult;
        number2 = "";
    }
    operation = choosedOperation;
}

function resetVals() {
    operation = "";
    number1 = "";
    number2 = "";
}

function checkButton(clickedButton) {
    const numbers = "0123456789";
    const operations = "+-*/";

    if (clickedButton == "AC") {
        currentResult = "0";
        resetVals();
    }

    if (operations.includes(clickedButton))
        handleOperation(clickedButton);

    if (clickedButton == "=") {
        if (operation !== "" && number1 !== "" && number2 !== "") {
            currentResult = operate(parseInt(number1), parseInt(number2), operation);
            resetVals();
        }
    }

    if (numbers.includes(clickedButton)) {
        if (operation != "") {
            number2 = number2 === "0" ? number2 = "" : number2;
            number2 = number2.concat(clickedButton);
            currentResult = number2;
        }
        else {
            number1 = number1 === "0" ? number1 = "" : number1;
            number1 = number1.concat(clickedButton);
            currentResult = number1;
        }
    }

    if (clickedButton == "%") {
        currentResult = operate(number1, 10, "%");
        number1 = currentResult;
        number2 = "";
    }

    // if (clickedButton == "+/-") {
    //     if (number1 && number1[0] == '-')
    //         number1 = number1.substring(1);
    //     number1 = "-" + number1;
    // }
}

function updateResult(_content) {
    const result = document.getElementsByClassName("result")[0];

    result.textContent = _content;
}

function calculator(e) {
    checkButton(e.textContent);
    updateResult(currentResult);
}