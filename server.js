const express = require('express')
require('dotenv').config()
const app = new express()
const { userRoutes, tripRoutes, addressRoutes } = require('./src/router')

app.use(express.json())

app.use('/users', userRoutes)
app.use('/address', addressRoutes)
app.use('/trip', tripRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server listening to port ${process.env.PORT}`)
})