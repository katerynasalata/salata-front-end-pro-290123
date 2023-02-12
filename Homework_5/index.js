let operation = prompt('Choose your operator: add, sub, mult, div');
let firstNum = prompt('What is your first number?');
let secondNum = prompt('What is your second number?');

firstNum = Number(firstNum);
secondNum = Number(secondNum);

let result;
let operator;
if (operation == 'add') {
    operator = '+';
    result = firstNum + secondNum;
}
else if (operation == 'sub') {
    operator = '-';
    result = firstNum - secondNum;
}
else if (operation == 'mult') {
    operator = '*';
    result = firstNum * secondNum;
}
else if (operation == 'div') {
    operator = '/';
    result = firstNum / secondNum;
}

let output = firstNum + ' ' + operator + ' ' + secondNum + ' = ' + result
alert(output);