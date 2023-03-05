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

function isPrime(number) {
    let divisors = findDivisors(number);
    if(divisors.includes(number))
        return true;
    else 
        return false;
}

let primeNumber = 37;
console.log(isPrime(primeNumber));

let notPrimeNumber = 120;
console.log(isPrime(notPrimeNumber));