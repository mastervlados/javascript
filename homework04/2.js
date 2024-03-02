"use strict";

/*
    Необходимо переписать данный код, используя тернарный оператор.
    Если есть какие-либо недочеты в коде, можете их исправить.
*/

// let test = confirm("У вас много денег?");
// if (test === true) {
//   console.log("Скоро будем у вас ;)");
// } else {
//   console.log("До свидания.");
// }

const checkMoneyBag = () => {
    console.log(confirm('Do you have a lot of money?') ? 'Call 911' : 'You should start learning programming')
}

checkMoneyBag()

