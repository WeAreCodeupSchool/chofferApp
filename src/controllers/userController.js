const { 
    createUser, 
    updateUser,
    findUserByEmail,
    findUserById,
} = require('../infraestructure/userRepository')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = async(request, response) => {
    try {
        const role = request.body.role
        const password = await bcrypt.hash(request.body.password, 10)
        const user = {
            email: request.body.email,
            password,
            stripe_card_id: request.body.stripeCardId,
            phone: request.body.phone,
            role: request.body.role
        }
        const createdUser = await createUser(user, role)
        const token = jwt.sign(
            { ...createdUser,  password: null, role },
            process.env.JWT_TOKEN
        );
        response.status(201).send(token)
    } catch(error) {
        response.status(500).send(error)
    }
}

const loginController = async(request, response) => {
    try {
        const user = {
            email: request.body.email,
            password: request.body.password
        }
        const userDB = await findUserByEmail(user.email)
        const arePasswordEquals = await bcrypt.compare(user.password, userDB.password)
        if(!arePasswordEquals) {
            response.status(401).send({error: "User unAuthorized"})
        }
        const token = jwt.sign(
            { ...userDB,  password: null },
            process.env.JWT_TOKEN
        );
        response.status(200).send(token)
    } catch(error) {
        response.status(500).send(error)
    }
}

const getUserByIdController = async(request, response) => {
    try {
        const { userId } = request.params
        const user = await findUserById(parseInt(userId))
        response.status(200).send(user)
    } catch(error) {
        response.status(500).send(error)
    }
}

const updateUserController = async(request, response) => {
    try {
        const { userId } = request.params
        const userProperties = request.body
        const updatedUser = await updateUser(parseInt(userId), userProperties)
        response.status(200).send(updatedUser)
    } catch(error) {
        response.status(500).send(error)
    }
}

module.exports = { registerController, updateUserController, loginController, getUserByIdController }