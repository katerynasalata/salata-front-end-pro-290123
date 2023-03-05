let number = 120;
const divisors = [];
let i = 2;
let evenDivisorCount = 0;
let evenDivisorSum = 0;

while(i <= number) {
    if(number % i === 0){
        divisors.push(i);
        number /= i;

        if (i % 2 === 0) {
            evenDivisorCount++;
            evenDivisorSum += i;
        }
    } else {
        i++;
    }
}

// Part 9
console.log(divisors);

// Part 10
console.log(evenDivisorCount);

// Part 11
console.log(evenDivisorSum);