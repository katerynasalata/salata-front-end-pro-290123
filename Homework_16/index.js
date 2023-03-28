const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
function generateKey(keyLength, characters) {
    let key = '';

    for(let i = 0; i < keyLength; i++) {
        let index = getRandomNumber(0, characters.length - 1);
        key += characters[index];
    }

    return key;
}

const key = generateKey(16, characters);
console.log(key);