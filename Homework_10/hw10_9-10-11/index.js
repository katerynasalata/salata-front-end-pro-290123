let number = 50;
const divisors = [];
let i = 1;
let evenDivisorCount = 0;
let evenDivisorSum = 0;

for (; i <= number; i++) {
    if (number % i === 0) {
        divisors.push(i);
        if (i % 2 === 0) {
            evenDivisorCount++;
            evenDivisorSum += i;
        }
    }
}


// Part 9
console.log(divisors);

// Part 10
console.log(evenDivisorCount);

// Part 11
console.log(evenDivisorSum);