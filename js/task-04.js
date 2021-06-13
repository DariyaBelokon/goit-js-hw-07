let counterValue = 0;
const addBtn = document.querySelector("button");
const removeBtn = document.querySelectorAll("button")[1];
// console.log(addBtn);
// console.log(removeBtn);
const value = document.getElementById("value");
const handleDecrementButtonClick = (e) => {
    counterValue = counterValue - 1;
    console.log(counterValue);
    value.textContent = `${counterValue}`;
    console.log(value);
};
addBtn.addEventListener('click', handleDecrementButtonClick);
const handleIncrementButtonClick = (e) => {
    counterValue = counterValue + 1;
    console.log(counterValue);
    value.textContent = `${counterValue}`;
    console.log(value);
};
removeBtn.addEventListener('click', handleIncrementButtonClick);

