"use strict";

/*
    Необязательное задание. 
    Необходимо вывести горку в консоль (используя цикл for), как показано на
    рисунке, только у вашей горки должно быть 20 рядов, а не 5:

    x
    xx
    xxx
    xxxx
    xxxxx
*/

function printMountain(height) {
    let level = 'x';
    for (let index = 0; index < height; index++) {
        console.log(level);
        level += 'x';
    }
};

printMountain(20);
