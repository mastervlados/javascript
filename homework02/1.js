"use strict";

/*
    Необходимо пользователя попросить ввести температуру в градусах Цельсия,
    преобразовать введенное пользователем значение в соответствующую температуру
    в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
    "Цельсий: {C}, Фаренгейт: {F}"
    Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
    были получены ранее.
    Формула перевода градусов Цельсия в градусы Фаренгейта:
    градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

    Уточнение: пользователь всегда вводит корректное число.
*/
const convertCelsiusToFahrenheit = () => {
    const promptTitle = 'Type the temperature in degrees Celsius:'
    const degreesCelsius = prompt(promptTitle, '')
    const degreesFahrenheit = (9 / 5) * degreesCelsius + 32
    alert(`Celsius: ${degreesCelsius}, Fahrenheit: ${degreesFahrenheit}`)
}

convertCelsiusToFahrenheit()