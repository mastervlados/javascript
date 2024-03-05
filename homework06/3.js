"use strict";

/*
    Необходимо попросить пользователя ввести три числа.
    Необходимо создать функцию, в которую мы должны передать эти три числа.
    Функция должна определить максимальное, среди переданных ей значение и 
    вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

    Примечание: Условимся, что пользователь всегда вводит корректные значения, 
    три числа. Проверять их не нужно.
*/

/**
 * 
 * @param {string} label 
 * @returns 
 */
const suggestInputNumber = (label) => { 
    return +prompt(`Type a number for ${label}.`);
}

const x = suggestInputNumber('position X');
const y = suggestInputNumber('position Y');
const z = suggestInputNumber('position Z');

const point = { x, y, z }

getMaxNumberFrom3DPoint(point);

function getMaxNumberFrom3DPoint(point) {
    const { x, y, z } = point
    const max = Math.max(x, y, z) 
    console.log(`The max number between ${x}, ${y}, ${z} is equal ${max}`);
}