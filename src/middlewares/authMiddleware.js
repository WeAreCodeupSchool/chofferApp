const jwt = require('jsonwebtoken');

const authMiddleware = (role) => {
    return async(request, response, next) => {
        const bearerToken = request.headers.authorization
        if(!bearerToken) response.status(403).send("token is empty")
        const token = bearerToken.split(' ')[1]
        const userAllowed = await isUserAllowed(token, role)
        if(!userAllowed) response.status(403).send("User role has not have permission to access this resource")
        next()
    }
}

const isUserAllowed = async (token, role) => {
    const decodedToken = await jwt.verify(token, process.env.JWT_TOKEN)
    return decodedToken.role === role
}

module.exports = { authMiddleware }