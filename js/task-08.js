const input = document.querySelector('#controls input');
console.log(input);
const handleCreateInput = (e) => { console.log(input.value); }
const buttonAll = document.querySelectorAll('#controls button');
const buttonCreate = buttonAll[0];
const buttonRemove = buttonAll[1];
const box = document.getElementById('boxes');

 const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const createBoxes = amount => {
    amount = input.value;
    const collection = [];
    for (let i = 0; i < amount; i++) {
        const newElement = document.createElement('div');
        collection.push(newElement);
        const randomWidth = 30 + 10 * i;
        const randomHeight = 30 + 10 * i;
        newElement.style.width = `${randomWidth}px`;
        newElement.style.height = `${randomHeight}px`;
        newElement.style.backgroundColor = `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`;
    }
    box.append(...collection);
    console.log(box);
};
buttonCreate.addEventListener('click', createBoxes);
buttonRemove.addEventListener('click', e => {
    let children = box.childNodes;
    
    if (box.firstChild) {
        box.innerHTML = '';
        console.log(box);
    }
}
);
