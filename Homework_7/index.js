let firstNum, secondNum, thirdNum, sum, mean;

firstNum = prompt('What is your first number?');
secondNum = prompt('What is your second number?');
thirdNum = prompt('What is your third number?');

firstNum = Number(firstNum);
secondNum = Number(secondNum);
thirdNum = Number(thirdNum)

sum = firstNum + secondNum + thirdNum;
mean = sum / 3;

alert(mean);