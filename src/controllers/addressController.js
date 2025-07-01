const { createAddress, updateAddress } = require('../infraestructure/addressRepository')

const createAddressController = async(request, response) => {
    try {
        const address = {
            calle: request.body.calle,
            numero: request.body.numero,
            postal_code: request.body.postalCode,
        }
        const createdAddress = await createAddress(address)
        response.status(201).send(createdAddress)
    } catch(error) {
        response.status(500).send(error)
    }
}

const updateAddressController = async(request, response) => {
    try {
        const addressProperties = request.body
        const { addressId } = request.params
        const updatedAddress = await updateAddress(parseInt(addressId), addressProperties)
        response.status(200).send(updatedAddress)
    } catch(error) {
        response.status(500).send(error)
    }
}

module.exports = { createAddressController, updateAddressController }