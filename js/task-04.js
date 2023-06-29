const counter = document.querySelector('#counter');
const incrementBtn = counter.querySelector('button[data-action="increment"]');
const decrementBtn = counter.querySelector('button[data-action="decrement"]');
const value = counter.querySelector('#value');


decrementBtn.addEventListener('click', subtract);
incrementBtn.addEventListener('click', add);

let counterValue = 0;

function subtract() {
    counterValue -= 1;
    value.textContent = counterValue;
}

function add() {
    counterValue += 1;
    value.textContent = counterValue;
}

