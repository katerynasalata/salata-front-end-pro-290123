const number = 27;
let i = 10;

for(; i <= 100; i++) {
    if (i % 10 === 0) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}$`);
    }
}