// Object places outside the class
// cannot read property when
// tryed get this object via «this»
// within.
let nextIndex = 3
const users = [
    { id: 1, name: 'John Smith', age: 30, email: 'john@example.com' }, 
    { id: 2, name: 'Jane Power', age: 28, email: 'jane@example.com' }
]

class UserController {
    async getUserData({ params }, res) {
        const user = users.find((element) => element.id === Number(params.id))
        res.json(user)
    }

    async saveUserData({ body }, res) {
        const index = nextIndex++
        users.push({ id: index, ...body })
        res.json(index)
    }
}

module.exports = new UserController()