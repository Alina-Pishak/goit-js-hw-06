function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const control = document.querySelector('#controls');
const createBtn = control.querySelector('button[data-create]');
const destroyBtn = control.querySelector('button[data-destroy]');
const input = control.querySelector('input');
const boxesList = document.querySelector('#boxes')


createBtn.addEventListener('click', create);
destroyBtn.addEventListener('click', destroy)

function create() {
  const min = input.getAttribute('min');
  const max = input.getAttribute('max');
  if ((input.value <= Number(max)) && (input.value >= Number(min))) {
    createBoxes(input.value);
  } else {
    alert("Введіть число від 1 до 100");
  }
}

function destroy() {
  input.value = '';
  boxesList.textContent = '';
}


function createBoxes(amount) {
  let size = 30;
  const boxArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const box = `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-top: 10px"></div>`
    boxArr.push(box);
  }
  boxesList.insertAdjacentHTML('beforeend', boxArr.join(''));
}

