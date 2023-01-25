const ulCategories = document.querySelectorAll('#categories li.item');
console.log(`Number of categories: ${ulCategories.length}`);

const title = [...document.querySelectorAll('.item >h2')];
console.log(title);
for (let i = 0; i < title.length; i+= 1) {
  console.log(`Category: ${title[i].textContent}`);
  const titleSiblingList = title[i].nextElementSibling;
  // console.log (`Elements: ${titleSiblingList.childElementCount}`);
  console.log(`Elements: ${titleSiblingList.childElementCount}`);

  
}