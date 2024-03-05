"use strict";

/*
    Необходимо попросить пользователя ввести число.
    Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
    строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
    (нужно будет ее создать), которая будет принимать введенное пользователем 
    число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
    сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const salary = +prompt('Enter your current salary:')

if (Number.isNaN(salary) || !Number.isInteger(salary) || salary <= 0) {
    console.warn(`Get ${salary}. Salary must be a number.`)
} else {
    calculateAfterTaxSalary(salary);
}

function calculateAfterTaxSalary(salary) {
    console.log(`Your after tax salary: ${salary * 0.87}.`)
}