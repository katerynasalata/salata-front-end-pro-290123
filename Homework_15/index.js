const arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    array.splice(array.indexOf(item), 1);
    return array;
}

console.log(removeElement(arr, 3));