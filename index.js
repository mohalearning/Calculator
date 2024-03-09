// To-Do
// create operations add, substract, multiply, divide
// every operation should written in the following format
// number1 operation number2

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
    return (number1 / number2);
}

function modulo(number1, number2) {
    return (number1 % number2);
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

// number1 operation number2

// update result method

// if is the number is clicked update the result
// if the operation is clicked
// if the 2 numbers are saved effectuate the operation and update the result and
// set the operation as a new operation
// else the operation will be updated


function checkButton(clickedButton) {
    const numbers = "0123456789";

    if (clickedButton == "AC") {
        currentResult = "";
        operation = "";
        number1 = "0";
        number2 = "0";
        updateResult("0");
    }

    if (clickedButton == "+") {
        if (operation !== "") {
            currentResult = operate(parseInt(number1), parseInt(number2), "+");
            updateResult(currentResult);
            number1 = currentResult;
            number2 = "0";
        }
        operation = "+";
    }
    if (clickedButton == "-") {
        if (operation !== "") {
            currentResult = operate(parseInt(number1), parseInt(number2), "-");
            updateResult(currentResult);
            number1 = currentResult;
            number2 = "0";
        }
        operation = "-";
    }
    if (clickedButton == "/") {
        if (operation !== "") {
            currentResult = operate(parseInt(number1), parseInt(number2), "/");
            updateResult(currentResult);
            number1 = currentResult;
            number2 = "0";
        }
        operation = "/";
    }
    if (clickedButton == "*") {
        if (operation !== "") {
            currentResult = operate(parseInt(number1), parseInt(number2), "*");
            updateResult(currentResult);
            number1 = currentResult;
            number2 = "0";
        }
        operation = "*";
    }
    if (clickedButton == "=") {
        if (operation !== "") {
            currentResult = operate(parseInt(number1), parseInt(number2), operation);
            updateResult(currentResult);
            number1 = currentResult;
            number2 = "0";
            operation = "";
        }
    }
    if (numbers.includes(clickedButton)) {
        let content = "";
        if (operation != "") {
            updateResult("");
            number2 = number2.concat(clickedButton);
            content = number2;
        }
        else {
            number1 = number1.concat(clickedButton);
            content = number1;
        }
        updateResult(content);
    }
    if (clickedButton == "%")
    {
        currentResult = operate(number1, 10, "%");
        updateResult(currentResult);
        number1 = currentResult;
        number2 = "0";
    }
}

function updateResult(_content) {
    const result = document.getElementsByClassName("result")[0];

    result.textContent = _content;
}

function calculator(e) {
    // check the event fired
    // update values or do the operation
    // update the result
    checkButton(e.textContent);
}