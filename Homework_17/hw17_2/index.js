let firstNum = +prompt('What is your first number?');
let secondNum = +prompt('What is your second number?');
let operation = prompt('Choose your operator: add, sub, mult, div, mod, degree');

function doMath(x, znak, y) {
    let result;
    if (znak === 'add') {
        operator = '+';
        result = x + y;
    }
    else if (znak === 'sub') {
        operator = '-';
        result = x - y;
    }
    else if (znak === 'mult') {
        operator = '*';
        result = x * y;
    }
    else if (znak === 'div') {
        operator = '/';
        result = x / y;
    }
    else if (znak === 'mod') {
        operator = '%';
        result = x % y;
    }
    else if (znak === 'degree') {
        operator = '^';
        result = x ** y;
    }

    output = x + ' ' + operator + ' ' + y + ' = ' + result;
    return output;
}

alert(doMath(firstNum, operation, secondNum));