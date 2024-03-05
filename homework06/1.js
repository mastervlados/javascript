"use strict";

/*
    Создайте функцию которая принимает число, возводит переданное число в куб и 
    возвращает полученное значение. 
    Необходимо продемонстрировать вызов данной функции, с выводом результата, 
    который получаем от функции, в консоль.
*/

/**
 * Function desctiption
 * @param {number} x - param description
 * @returns 
 */
const getCube = (x) => { 
    return Math.pow(x, 3);
}

console.log(getCube(3))
console.log(getCube(+prompt('Type a number:')))

