// To-Do
// create operations add, substract, multiply, divide
// every operation should written in the following format
// number1 operation number2

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
    // expection of zero;
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

