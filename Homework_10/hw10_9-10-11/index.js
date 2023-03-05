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

//Part 11
console.log(evenDivisorSum);

// let numbers = [1, 2, 3, 4];
// numbers.map(number => number * 10)

//Part 10
// let evenNumbers = divisors.filter(
//     number => number % 2 === 0
// );

// console.log(evenNumbers.length);

// for(; i <= 200; i++) {
//     if (i % 3 === 0) {
//         numbers.push(i);
//     }
// }