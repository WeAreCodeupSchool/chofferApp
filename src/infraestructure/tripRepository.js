const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient()

const createTrip = async (trip) => {
    try {
        const createdTrip = await prisma.trip_requests.create({ data: trip })
        return createdTrip
    } catch(error) {
        console.error('while creating user', error)
        throw new Error(error)
    }
}

const updateTrip = async (tripId, tripData) => {
    try {
        const updatedTrip = await prisma.trip_requests.update({
        where: {
            id: parseInt(tripId)
        },
        data: tripData
    })
        return updatedTrip
    } catch(error) {
        console.error('while updating user', error)
        throw new Error(error)
    }
}

const deleteTrip = async (tripId) => {
    try {
        const deletedTrip = await prisma.trip_requests.delete({
        where: {
            id: parseInt(tripId)
        },
    })
        return deletedTrip
    } catch(error) {
        console.error('while delete user', error)
        throw new Error(error)
    }
}

const getTripByUserId = async (userId, role) => {
    try {
        const trip = await prisma.users.findFirst(
            { 
                where: { id: parseInt(userId) }, 
                include: {
                    [role]: {
                        include: {
                            trip_requests: true,
                        }
                    }
                }
        })
        return trip[role][0]?.trip_requests ?? []
    } catch(error) {
        console.error('while creating user', error)
        throw new Error(error)
    }
}

module.exports = { createTrip, getTripByUserId, updateTrip, deleteTrip }