const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;
  return ingredientsItem;
});

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...ingredientsList);
