const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector("#gallery");
// const items = images.map(item => {
//     const image = document.createElement("img");
//     image.src = item.url;
//     image.alt = item.alt;
//     image.width = 150;
//     image.height = 100;
// image.style.display = flex;
//     return image;
// });
// console.log(items);
// gallery.append(...items);


const items = images.map(item => {
    gallery.insertAdjacentHTML('afterbegin', `<li><img src="${item.url}" alt="${item.alt}" width=150 height=100 ></li>`)
});
console.log(gallery);