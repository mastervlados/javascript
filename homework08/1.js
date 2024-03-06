"use strict";

/*
    Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
    0 – это ноль
    1 – нечетное число
    2 – четное число
    3 – нечетное число
    …
    10 – четное число
*/

/**
 * Function prints numbers and its description
 * @param {number} times - how many times to print
 */
function printOddAndEvenNumbers(times) {
    for (let index = 0; index < times + 1; index++) {
        if (index === 0) {
            console.log(`${index} - is zero.`);
        } else if (index % 2 === 0) {
            console.log(`${index} - is the even number.`);
        } else if (index % 2 !== 0) {
            console.log(`${index} - is the odd number.`)
        };
    };
};

printOddAndEvenNumbers(10);
