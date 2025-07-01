const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient()
const createUser = async (user, role) => {
    try {
        return prisma.$transaction(async(tx) => {
            const createdUser = await tx.users.create({ data: user })
            if(role === 'client') {
                await tx.client.create({ data: {user_id: createdUser.id } })
            } else {
                await tx.chofer.create({ data: { user_id: createdUser.id } })
            }
            return createdUser
        })
    } catch(error) {
        console.error('while creating user', error)
        throw new Error(error)
    }
}
const findUserByEmail = async(email) => {
    try {
        const user = await prisma.users.findFirst({ 
            where: { email },
        })
        return user
    } catch(error) {
        console.error('while getting user by email', error)
        throw new Error(error)
    }
}

const findUserById = async(userId) => {
        try {
        const user = await prisma.users.findFirst({ 
            where: { 
                id: userId 
            },
            include: { 
                address: true 
            }
        })
        return user
    } catch(error) {
        console.error('while getting user by userId', error)
        throw new Error(error)
    }
}
const updateUser = async(userId, userProperties) => {
    try {
        const updatedUser = await prisma.users.update({
            where: {
                id: userId,
            },
            data: userProperties,
        })
        return updatedUser
    } catch(error) {
        console.error('while updating user', error)
        throw new Error(error)
    }
}
module.exports = { createUser, updateUser, findUserByEmail, findUserById }