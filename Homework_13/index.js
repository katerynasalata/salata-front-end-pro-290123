const numbers = [
    16, -37, 54, -4, 72, -56, 47, 4, 
    -16, 25, -37, 46, 4, -51, 27, -63,
     4, -54, 76, -4, 12, -35, 4, 47
];

// Question 1
let positiveNumbers = numbers.filter(number => number > 0);
let positiveNumberCount = positiveNumbers.length;
let sumPositiveNumbers = positiveNumbers.reduce(
    function(a, b) {
        return a + b;
    }
);

console.log('Question 1:');
console.log(`Positive numbers: [${positiveNumbers}]`);
console.log(`Positive number count: ${positiveNumberCount}`);
console.log(`Sum of positive numbers: ${sumPositiveNumbers}`);

// Questions 2 and 3
let sortedNumbers = numbers.slice().sort((a, b) => a - b);
let minimumNumber = sortedNumbers[0];
let maximumNumber = sortedNumbers[numbers.length - 1];
let minNumberOrdinal = numbers.indexOf(minimumNumber) + 1;
let maxNumberOrdinal = numbers.indexOf(maximumNumber) + 1;

console.log('Questions 2 and 3:');
console.log(`Minimum number = ${minimumNumber}`);
console.log(`Maximum number = ${maximumNumber}`);
console.log(`Minimum number is ${minNumberOrdinal}th number`);
console.log(`Maximum number is ${maxNumberOrdinal}th number`);

// Question 4
let negativeNumbers = numbers.filter(number => number < 0);
let negativeNumberCount = negativeNumbers.length;

console.log('Question 4:');
console.log(`Negative number count: ${negativeNumberCount}`);

// Questions 5 and 6:
let oddPositiveNumbers = positiveNumbers.filter(number => number % 2 != 0);
let evenPositiveNumbers = positiveNumbers.filter(number => number % 2 === 0);

console.log('Questions 5 and 6:');
console.log(`Odd positive number count: ${oddPositiveNumbers.length}`);
console.log(`Even positive number count: ${evenPositiveNumbers.length}`);

// Questions 7 and 8:
let sumOddPositiveNumbers = oddPositiveNumbers.reduce((a, b) => a + b);
let sumEvenPositiveNumbers = evenPositiveNumbers.reduce((a, b) => a + b);

console.log('Questions 7 and 8:');
console.log(`Sum of odd positive number count: ${sumOddPositiveNumbers}`);
console.log(`Sum of even positive number count: ${sumEvenPositiveNumbers}`);

// Question 9:
let productPositiveNumbers = positiveNumbers.reduce((a, b) => a * b);

console.log('Question 9:');
console.log(productPositiveNumbers);

// Question 10:
let zeroArray = numbers.map(number => number === maximumNumber ? maximumNumber : 0);

console.log('Question 10:');
console.log(`[${zeroArray}]`);