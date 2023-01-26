const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const listItems = [];

for (const ingredient of ingredients) {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = ingredient
  listItems.push(ingredientsItem);
  
}
ingredientsList.append(...listItems);