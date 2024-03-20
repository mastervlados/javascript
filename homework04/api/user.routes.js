const Router = require('express')
const router = new Router()
const userController = require('./user.controller')

router.post('/user', userController.saveUserData)
router.get('/user/:id', userController.getUserData)

module.exports = router