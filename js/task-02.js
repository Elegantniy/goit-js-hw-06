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
for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = ingredients[i];
  listItems.push(ingredients[i]);
}
ingredientsList.append(...listItems);