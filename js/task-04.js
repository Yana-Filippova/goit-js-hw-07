let counterValue = 0;

const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]',
);
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]',
);
const counterEl = document.querySelector('#value');

const increment = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

incrementBtnEl.addEventListener('click', increment);
decrementBtnEl.addEventListener('click', decrement);
