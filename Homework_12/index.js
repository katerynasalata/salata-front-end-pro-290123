let lengthArray = prompt('Довжина масиву:');
let userArray = [];
let i = 0;

for(; i < lengthArray; i++) {
    userArray.push(prompt(`Введіть ${i+1} елемент`));
}
alert(`Array: [${userArray}]`);

let sortedArray = userArray.sort((a, b) => a - b);
alert(`Sorted array: [${sortedArray}]`);

let reducedArray = sortedArray.splice(1, 3);
alert(`Reduced array: [${sortedArray}]`);