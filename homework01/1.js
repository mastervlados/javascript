// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
    albums: [
        {
            title: 'I\'m coding',
            artist: 'I',
            year: '2024',
        },
        {
            title: 'You\'re reviewing',
            artist: 'You',
            year: '2023',
        },
        {
            title: 'They wanted a show',
            artist: 'They',
            year: '2022',
        },
    ],
    [Symbol.iterator] () {
        const albumsLength = this.albums.length
        const array = this.albums

        return {
            current: 0,
            last: albumsLength,
            next() {
                if (this.current < this.last) {
                    const element = array[this.current++]
                    const { title, artist, year } = element
                    
                    return { 
                        done: false, 
                        value: `${title} - ${artist} (${year})`
                    }
                }
                return { done: true }
            } 
        }
    },
}

for (let entry of musicCollection) {
    console.log(entry)
}