"use strict";

/*
    Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
    целое число в интервале [1, 32).
    Если пользователь ввел иное значение, необходимо вывести в консоль 
    "Неверное значение".
    Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
    определить, в какую декаду месяца попадает это число и вывести сообщение в 
    консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
    подставлены подходящие значения, которые мы получили.

    Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
    число 32.
*/

const getDecadeOfMonthByDayNumber = () => {

    const dayNumber = +prompt('Type a day number in range from 1 to 31:')

    const endingForDecade = {
        1: 'st',
        2: 'nd',
        3: 'rd',
    }

    if (Number.isNaN(dayNumber) || !(dayNumber >= 1 && dayNumber < 32)) {
        console.log('Wrong day number.')
    } else {
        // 1-10 = 1st
        // 11-20 = 2nd
        // 21-31 = 3rd
        const tenDayPeriod = dayNumber === 31 ? 3 : Math.ceil(dayNumber / 10)
        console.log(`Number ${dayNumber} refers to the ${tenDayPeriod + '' + endingForDecade[tenDayPeriod]} decade of the month.`)
    }
}

getDecadeOfMonthByDayNumber()

