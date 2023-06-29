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
  createBoxes(input.value);
}

function destroy() {
  input.value = '';
  boxesList.textContent = '';
}


function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const box = `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-top: 10px"></div>`
    boxesList.insertAdjacentHTML('beforeend', box);
  }
}


// const box = document.createElement('div');
// box.style.color = getRandomHexColor();
// boxesList.append(box);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const controls = document.querySelector('controls');
// const inputNumberEl = document.querySelector('[type="number"]');
// const createBtnEl = document.querySelector('button[data-create]');
// const destroyBtnEl = document.querySelector('button[data-destroy]');
// const divBoxesEl = document.getElementById('boxes');
// divBoxesEl.style.display = 'flex';
// divBoxesEl.style.flexWrap = 'wrap';
// divBoxesEl.style.alignItems = 'center';
// divBoxesEl.style.marginTop = '30px';

// createBtnEl.addEventListener('click', () => {
//   //console.log(inputNumberEl.value);
//   if (
//     Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
//     Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
//   ) {
//     alert('Please enter number from 1 to 100');
//   } else {
//     createBoxes(inputNumberEl.value.trim());
//   }
//   inputNumberEl.value = '';
// });

// destroyBtnEl.addEventListener('click', destroyBoxes);

// function destroyBoxes() {
//   inputNumberEl.value = '';
//   divBoxesEl.innerHTML = '';
// }


// function createBoxes(amount) {
//   let size = 30;
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     size += 10 * i;
//     const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
//     boxesArr.push(div);
//   }
//   divBoxesEl.insertAdjacentHTML('beforeend', boxesArr.join(''));
// }