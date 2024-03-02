"use strict";

/*
    Создать переменные positive и negative, в которые пользователь вводит с 
    клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
    переменную positive и отрицательное в переменную negative. 
    Перед тем, как положить значения в данные переменные необходимо их превратить 
    в числа.
    После ввода значений, необходимо вывести "Все значения верные.", если 
    пользователь действительно ввел корректные значения, которые мы просили его 
    ввести.
    Если же пользователь где-то ввел неверное значение, то необходимо вывести 
    в консоль "Одно или более значений некорректно.".
*/

const twoNumbers = () => {

    const positive = +prompt('Type a number greater than zero:')
    const negative = +prompt('Type a negative number:')

    if (Number.isNaN(positive) 
        || Number.isNaN(negative) 
        || positive <= 0 
        || negative >= 0) {
        console.warn('One or both numbers are not correct.')
    } else {
        console.log('Numbers are correct!10')
    }
}

twoNumbers()


