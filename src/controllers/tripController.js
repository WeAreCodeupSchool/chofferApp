const { 
    createTrip,
    getTripByUserId,
    updateTrip,
    deleteTrip 
} = require("../infraestructure/tripRepository")

const createTripController = async(request, response) => {
    try {
        const trip = {
            chofer_id: request.body.choferId,
            client_id: request.body.clientId,
            estimated_price: request.body.estimatedPrice,
            status: request.body.status
        }
        const createdTrip = await createTrip(trip)
        response.status(201).send(createdTrip)
    } catch(error) {
        response.status(500).send(error)
    }
}

const getTripByUserController = async(request, response) => {
    try {
        const { userId, role } = request.params
        const trip = await getTripByUserId(userId, role)
        response.status(200).send(trip)
    } catch(error) {
        response.status(500).send(error)
    }
}

const updateTripController = async(request, response) => {
    try {
        const { tripId } = request.params
        const tripData = request.body
        const trip = await updateTrip(tripId, tripData)
        response.status(200).send(trip)
    } catch(error) {
        response.status(500).send(error)
    }
}

const deleteTripController = async(request, response) => {
    try {
        const { tripId } = request.params
        const trip = await deleteTrip(tripId)
        response.status(200).send(trip)
    } catch(error) {
        response.status(500).send(error)
    }
}

module.exports = { 
    createTripController,
    getTripByUserController,
    updateTripController,
    deleteTripController 
} 

