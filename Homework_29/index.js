const input = document.querySelector('input')

const button = document.querySelector('button')
button.addEventListener('click', fixUrl)

function fixUrl() {
    const url = input.value;
    
    if( url.startsWith( 'https://' ) ) {
        location.href = url;
    } else {
        location.href = `https://${url}`
    }
}