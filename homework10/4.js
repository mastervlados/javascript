"use strict";

/*
  1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
  фотография, используя метод filter. Исходные данные - массив products.
  2. Необходимо отсортировать массив products используя метод sort по цене,
  начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
  отсортированный массив в консоль.
  Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const anotherProducts = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

console.log('1.');
console.log(anotherProducts.filter(element => 'photos' in element && element.photos.length > 0));
console.log();
console.log('2.');
console.log(anotherProducts.sort(({ price: prev }, { price: curr }) => {
  if (prev > curr) {
    return 1;
  }
  return -1;
}));
