let i = 30;
let total = 0;

for(; i < 81; i++) {
    if (i % 2 === 1) {
        continue;
    }
    total += i;
}

console.log(total);