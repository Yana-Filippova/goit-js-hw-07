const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(item =>
  console.log(
    `Категория: ${
      item.querySelector('h2').textContent
    }\n Количество элементов: ${item.querySelectorAll('li').length}`,
  ),
);
