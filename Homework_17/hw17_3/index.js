function generateArray() {
    const mainArrayLen = +prompt('How many elements in main array?');
    let mainArray = '';

    for(i = 0; i < mainArrayLen; i++) {
        const subArrayLen = +prompt(`How many elements in ${i+1}. array?`);
        let subArray = [];

        for(j = 0; j < subArrayLen; j++) {
            subArray.push(prompt(`Enter ${j+1}. element for ${i+1}. array`));
        }

        mainArray += subArray.join(', ') + '\n';
    }
    
    alert(mainArray);
}

generateArray();