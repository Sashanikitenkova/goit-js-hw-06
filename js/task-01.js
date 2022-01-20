const allCategoriesEl = document.querySelectorAll('ul#categories li.item');
const numberCategories = allCategoriesEl.length;

console.log(`Number of categories: ${numberCategories}`);

for (let i = 0; i < numberCategories; i += 1) {
    const headerText = allCategoriesEl[i].firstElementChild.textContent;
    console.log(`Category: ${headerText}`);

    const elementsEl = allCategoriesEl[i].lastElementChild;
    const numberelements = elementsEl.querySelectorAll("li");
    console.log(`Elements: ${numberelements.length}`);
};



