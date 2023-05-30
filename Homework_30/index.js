function vote(event) {
    event.preventDefault();
    let elemNumber = +event.target.nextElementSibling.textContent;
    event.target.nextElementSibling.textContent = elemNumber+1;
}

for(let elem of document.querySelectorAll(".wrapper__emoji")) {
    elem.addEventListener("click", vote);
}