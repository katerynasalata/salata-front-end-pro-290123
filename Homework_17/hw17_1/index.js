const elements = [null, 'a', 29, 'b', 18, undefined, 'test', 'string', 54, 82, 46, function() {}, 11];

function calculateAverage(numbers) {
    numbers = numbers.filter(function (element) {
        return typeof element === "number";
    });
    const sumNumbers = numbers.reduce((a, b) => a + b);
    return sumNumbers / numbers.length;
}

console.log(calculateAverage(elements));
