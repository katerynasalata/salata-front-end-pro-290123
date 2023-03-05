let i = 100;
const numbers = [];

for(; i <= 200; i++) {
    if (i % 3 === 0) {
        numbers.push(i);
    }
}

console.log(numbers.join(' '));
