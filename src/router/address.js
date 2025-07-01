const express = require('express')
const { 
    createAddressController,
    updateAddressController
} = require('../controllers/addressController')

const addressRouter = express.Router()

addressRouter.post('/', createAddressController)
addressRouter.put('/:addressId', updateAddressController)

module.exports = addressRouter