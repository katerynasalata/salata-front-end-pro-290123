const element = document.getElementById('text');
const newElement = document.querySelector('div');

element.onmouseover = () => {
    newElement.style.display = "inline-block";
}

element.onmouseleave = () => {
    newElement.style.display = "none";
}