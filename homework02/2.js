// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"

export default class Student {
    name = '';
    age = -1;
    grade = '';

    constructor(student) {
        const { firstName, lastName, age, grade } = student;
        this.name = `${firstName} ${lastName}`;
        this.age = age;
        this.grade = grade;
        this.displayInfo = this.displayInfo.bind(this);
    }

    displayInfo() {
        const studentInfo = `
            Name: ${this.name}
            Age: ${this.age}
            Grade: ${this.grade}
        `.trim();
        console.log(studentInfo);
    }
}

const students = [
    { firstName: 'John', lastName: 'Smith', age: 16, grade: '10th grade' },
    { firstName: 'John', lastName: 'Doe', age: 17, grade: '11th grade' },
];

const student1 = new Student(students[0]);
const student2 = new Student(students[1]);

student1.displayInfo();
student2.displayInfo();

