const express = require('express')
const { 
    registerController,
    updateUserController,
    loginController,
    getUserByIdController
} = require('../controllers/userController')
const { authMiddleware } = require('../middlewares/authMiddleware')

const userRouter = express.Router()

userRouter.post('/register', registerController)
userRouter.put('/:userId', updateUserController)
userRouter.post('/login', loginController)
userRouter.get('/:userId', authMiddleware('chofer'), getUserByIdController)

module.exports = userRouter