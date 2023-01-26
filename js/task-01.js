const ulCategories = document.querySelector('#categories');
console.log("Number of categories:", ulCategories.children.length);

const title = document.querySelectorAll(".item");
for (let i = 0; i < title.length; i += 1) {
  const itemsEl = title[i];
  const categoryEl = itemsEl.firstElementChild;
  const sublistEl = itemsEl.lastElementChild;
  console.log(`Category: ${categoryEl.textContent}`);
  console.log(`Elements: ${sublistEl.children.length}`);
  
}