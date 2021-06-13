const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.getElementById("ingredients");
const elements = ingredients.map(number => {
    const li = document.createElement("li");
    li.textContent = number;
    return li;
});
console.log(elements);
listIngredients.append(...elements);


// const listIngredients = document.getElementById("ingredients");
// const newElement1 = document.createElement("li");
// newElement1.textContent = `${ingredients[0]}`;
// const newElement2 = document.createElement("li");
// newElement2.textContent = `${ingredients[1]}`;
// const newElement3 = document.createElement("li");
// newElement3.textContent = `${ingredients[2]}`;
// const newElement4 = document.createElement("li");
// newElement4.textContent = `${ingredients[3]}`;
// const newElement5 = document.createElement("li");
// newElement5.textContent = `${ingredients[4]}`;
// const newElement6 = document.createElement("li");
// newElement6.textContent = `${ingredients[5]}`;
// listIngredients.append(newElement1, newElement2, newElement3, newElement4, newElement5, newElement6);
// console.log(ingredients);


    

