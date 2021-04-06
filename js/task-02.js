const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientList = document.createElement('ul');

const container = document.getElementById('ingredients');

container.append(ingredientList);

ingredients.forEach(ingredients => {
    const liItem = document.createElement('li');
    liItem.textContent = ingredients;

    ingredientList.append(liItem);
    
});








  




  

