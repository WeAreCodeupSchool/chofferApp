const express = require('express')

const tripRouter = express.Router()

const { 
    createTripController,
    getTripByUserController,
    updateTripController,
    deleteTripController
 } = require('../controllers/tripController')

tripRouter.post('/', createTripController)
tripRouter.put('/:tripId', updateTripController)
tripRouter.get('/:userId/:role', getTripByUserController)
tripRouter.delete('/:tripId', deleteTripController)

module.exports = tripRouter