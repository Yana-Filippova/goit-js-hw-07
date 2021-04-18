const renderBtnEl = document.querySelector('button[data-action="render"]');
const destroyBtnEl = document.querySelector('button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');
const divBoxEl = document.querySelector('#controls input');

renderBtnEl.addEventListener('click', countAmount);
destroyBtnEl.addEventListener('click', destroyBoxes);

function countAmount() {
  let amount = Number(divBoxEl.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    basicSize += i * 10;

    let divEl = document.createElement('div');
    divEl.style.width = `width: ${updatedSize}px`;
    divEl.style.height = `height: ${basicSize}px`;
    divEl.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256,
    )} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`;

    boxesEl.appendChild(divEl);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  divBoxEl.value = '';
}


