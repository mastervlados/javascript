"use strict";

/*
    Необходимо создать переменную name, записать в эту переменную свое имя.
    Необходимо также создать переменную admin и присвоить этой переменной значение
    из переменной name.
    Вывести значение переменной admin в консоль.
*/

const printAdminName = () => {
    const promptTitle = 'Type your name below, please:'
    const name = prompt(promptTitle, '')
    const admin = name
    console.log(admin)
}

printAdminName()