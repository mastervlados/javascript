// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

class Kitchen {
    constructor(pizzaChef, sushiChef, dessertChef) {
        this.kitchen = new Map()
        this.pizzaChef = pizzaChef
        this.sushiChef = sushiChef
        this.dessertChef = dessertChef
    }

    getKitchen = () => {
        return this.kitchen
    }

    getPizzaChef = () => {
        return this.pizzaChef
    }

    getSushiChef = () => {
        return this.sushiChef
    }

    getDessertChef = () => {
        return this.dessertChef
    }

    addTask(order) {
        console.log(order)
        for (let position of order) {
            const { dish, count } = position
            let cook = 'Chef Martin'
            switch (dish) {
                case 'Пицца "Маргарита"':
                case 'Пицца "Пепперони"':
                    cook = this.getPizzaChef()
                    break
                case 'Суши "Филадельфия"':
                case 'Суши "Калифорния"':
                    cook = this.getSushiChef()
                    break
                case 'Тирамису':
                case 'Чизкейк':
                    cook = this.getDessertChef()
                    break
            }
            this.kitchen.set({dish, cook}, count)
        }
    }

    deleteTask(order, amount) {
        const { dish, cook } = order
        const currentCount = this.kitchen.get({dish, cook})
        const newAmount = currentCount - amount
        if (newAmount <= 0) {
            // Task completed.
            this.kitchen.delete({ dish, cook })
        } else {
            // A part from order completed.
            this.kitchen.set({dish, cook}, newAmount)
        }
    }

    toString() {
        console.log('********************************')
        console.log('**** Dishes and their chefs ****')
        console.log('********************************')
        for (let entry of this.kitchen) {
            const [{ dish, cook }, count] = entry
            console.log(`${dish} - повар: ${cook}, кол-во: ${count}`)
        }
    }
}


class Hall {
    constructor() {
        this.hall = new Map()
    }

    getHall = () => {
        return this.hall
    }

    addOrder(guestName, lots) {
        if (lots.length === 0) { return }
        this.hall.set(Symbol(guestName), lots)
    }

    deleteOrder(guestName) {
        this.hall.delete(Symbol(guestName))
    }

    toString() {
        console.log('****************')
        console.log('**** Orders ****')
        console.log('****************')
        for (let entry of this.hall) {
            const [guestSymbol, order] = entry
            console.log(guestSymbol.description)
            for (let line of order) {
                console.log(`> ${line.dish}, кол-во: ${line.count}.`)
            }
        }
    }
}


class Restaurant {
    constructor() {
        this.kitchen = new Kitchen('Виктор', 'Ольга', 'Дмитрий')
        this.hall = new Hall()
    }

    doService(data) {
        for (let entry of data) {
            const { guest, order } = entry
            this.hall.addOrder(guest, order)
            this.kitchen.addTask(order)
        }
        this.kitchen.toString()
        this.hall.toString()
    }
}

const data = [
    { 
        guest: 'Алексей', 
        order: [
            { dish: 'Пицца "Пепперони"', count: 2 },
            { dish: 'Тирамису', count: 1 },
        ] 
    },
    { 
        guest: 'Мария', 
        order: [
            { dish: 'Суши "Калифорния"', count: 1 },
            { dish: 'Пицца "Маргарита"', count: 1 },
        ] 
    },
    { 
        guest: 'Ирина', 
        order: [
            { dish: 'Чизкейк', count: 2 },
        ] 
    },
]

const restaurant = new Restaurant()
restaurant.doService(data)

