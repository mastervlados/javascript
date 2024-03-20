class UserAPI {
    apiBase = 'http://localhost:8080/api'

    // ""Получение данных о пользователе""
    getUserData = async (userID) => {
        return await fetch(this.apiBase + `/user/${userID}`)
    }

    // ""Отправка данных на сервер""
    saveUserData = async (user) => {
        return await fetch(this.apiBase + `/user`, {
            method: 'post',
            body: JSON.stringify(user)
        })
    }
}

const service = new UserAPI()

service.getUserData(2)
    .then(response => console.log(response.json()))
    .catch(error => console.error(error.message))

const user = {
    name: 'Vladislav Elizarov',
    age: 28,
    email: 'velizarovdev@gmail.com'
}

service.saveUserData(user)
    .then(() => console.log('User data saved successfully'))
    .catch(error => { console.error(error.message) })