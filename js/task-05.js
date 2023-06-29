const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', output);

function output() {
    if (inputName.value.length > 0) {
        console.log(inputName.value.length);
        outputName.textContent = inputName.value;
    } else {
        outputName.textContent = 'Anonymous';
    }
}