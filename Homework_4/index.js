let firstNum = prompt('What is your first number?');
let secondNum = prompt('What is your second number?');

firstNum = Number(firstNum);
secondNum = Number(secondNum);

let sum = firstNum + secondNum;
let diff = firstNum - secondNum;
let mult = firstNum * secondNum;
let div = firstNum / secondNum;

let output = '';
output += firstNum + ' + ' + secondNum + ' = ' + sum + '\n';
output += firstNum + ' - ' + secondNum + ' = ' + diff + '\n';
output += firstNum + ' * ' + secondNum + ' = ' + mult + '\n';
output += firstNum + ' / ' + secondNum + ' = ' + div + '\n';

alert(output);