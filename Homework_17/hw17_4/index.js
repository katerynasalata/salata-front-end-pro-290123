function getUserInputs() {
    let inputStr = prompt('Enter a string');
    
    let charLength = +prompt('How many characters to delete?');
    let chars = [];

    for(i = 0; i < charLength; i++) {
        chars.push(prompt('Enter a character'));
    }

    return [inputStr, chars];
}

function removeCharacters(inputStr, chars) {
    for (let index in chars) {
        inputStr = inputStr.replaceAll(chars[index], '');
    }
    return inputStr;
}

let inputs = getUserInputs();
let inputStr = inputs[0];
let chars = inputs[1];
let result = removeCharacters(inputStr, chars);
alert(result);