const categories = document.getElementById("categories");
const categoriesCount = categories.children.length;
console.log(`В списке ${categoriesCount} категории.`);
const categoryItems = document.querySelectorAll(".item");

const categoryNames = document.querySelectorAll(".item h2");
for (let i = 0; i < categoryNames.length; i += 1) {
    console.log("Категория:", categoryNames[i].textContent);
    const categoryItemsList = categoryItems[i].querySelectorAll("li");
    console.log("Количество элементов:", categoryItemsList.length);
}

