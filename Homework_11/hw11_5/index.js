function findDivisors(number) {
    let i = 2;
    const divisors = [];

    while(i <= number) {
        if(number % i === 0) {
            divisors.push(i);
            number /= i;
        } else
            i++;
    }

    return divisors;
}

let number = 81;
let divisors = findDivisors(number);
const result = divisors.every(number => number === 3);

console.log(result);