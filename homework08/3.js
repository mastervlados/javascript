"use strict";

/*
    Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
    диапазоне [0, 9].
    После создания массива необходимо вывести в консоль следующие значения:
    1. Сумму элементов массива
    2. Минимальное значение в массиве
    3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
    значение равно 3.
    Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
    в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
    массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
    не окажется, значит нужно будет вывести пустой массив.
*/

const generateArray = () => {
    const array = [];
    let sumOfElements = 0;
    const specialElementsIndexes = [];

    for (let index = 0; index < 5; index++) {
        const element = Math.floor(Math.random() * 10);
        array.push(element);
        sumOfElements += element;
        element === 3 ? specialElementsIndexes.push(index) : null;
    };
    
    console.log(`
        Array: ${array}

        1. Sum of elements: ${sumOfElements}
        2. Min element is equal: ${Math.min(...array)}
        3. Indexes of elements where the value is equal "3": ${specialElementsIndexes.length === 0 ? '[]' : `[${specialElementsIndexes}]`}
    `);
    return array;
};

generateArray();
