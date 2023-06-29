//1
const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

//2
categories.forEach((category) =>
    console.log(`Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.children.length}`)
);


// categories.forEach((category) => {
//   const categoryName = category.querySelector("h2").textContent;
//   const categoryElements = category.querySelectorAll("li").length;
//   console.log(`Category : ${categoryName}`);
//   console.log(`Elements: ${categoryElements}`);
// });

// Який варіант краще застосувати?