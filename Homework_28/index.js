const changeImg = ()=> {
    const randomImg = Math.ceil(Math.random() * 9);
    document.querySelector('img').src = 'images/' + randomImg + '.jpg'
}

document.querySelector('button').addEventListener('click', changeImg);