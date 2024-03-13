// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

export default class Book {
    title = ''; 
    author = '';
    pages = -1;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.displayInfo = this.displayInfo.bind(this);
    }

    displayInfo() {
        console.log(`Book: «${this.title}», author: ${this.author}, contains ${this.pages} pages.`);
    }
    
}

const myBook = new Book('Endlessly dreams', 'Vladislav Elizarov', 100);
myBook.displayInfo();