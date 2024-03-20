// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
async function changeStyleDelayed(element, delay) {
    await setTimeout(() => {
        const target = document.getElementById(element)
        target.style.width = '40px'
        target.style.height = '40px'
        target.style.backgroundColor = 'royalblue'
    }, delay * 1000);
}

changeStyleDelayed('myElement', 2);