const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient()
const createAddress = async (address) => {
    try {
        const createdAddress = await prisma.address.create({ data: address })
        return createdAddress
    } catch(error) {
        console.error('while creating address', error)
        throw new Error(error)
    }
}

const updateAddress = async(addressId, addressProperties) => {
    try {
        const updatedAddress = await prisma.address.update({
            where: {
                id: addressId,
            },
            data: addressProperties,
        })
        return updatedAddress
    } catch(error) {
        console.error('while updating address', error)
        throw new Error(error)
    }
}

module.exports = { createAddress, updateAddress }