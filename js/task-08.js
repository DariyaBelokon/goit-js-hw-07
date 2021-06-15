const input = document.querySelector('#controls input');
console.log(input);
const handleCreateInput = (e) => { console.log(input.value); }
const buttonAll = document.querySelectorAll('#controls button');
const buttonCreate = buttonAll[0];
const buttonRemove = buttonAll[1];
const box = document.getElementById('boxes');


const colors = ["red", "blue", "green"];

const createBoxes = amount => {
    amount = input.value;
    const collection = [];
    for (let i = 0; i < amount; i++) {
        collection.push(document.createElement('div'));
    }
    box.append(...collection);
    console.log(box);
};
buttonCreate.addEventListener('click', createBoxes);
buttonRemove.addEventListener('click', e => {
    let children = box.childNodes;
    // НЕ СРАБОТАЛО! не удалило элементы!
    for (let i = 0; i < children; i++) {
        box.remove(children[i]);
    }
    // Удалило только первый элемент, найти вариант!
    //  if (box.firstChild) {
    //      box.firstChild.remove();
    //     console.log(box);
    //  }
    
}
)