const express = require('express')
const app = express()

// IMPORT MODULES


// IMPORT FUNCTIONS
const { connectMongoDB } = require('./connection')
const erpRoute = require('./routes/erpRoutes')


// Middlewares


// DOTENV IMPORT
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8001
const mongoURL = process.env.mongoURL


// MongoDB Connection
connectToMongoDB(mongoURL)
.then(() => console.log('MongoDB Connected Successfully'))
.catch((error) => console.log('Something went wrong while connecting to MongoDB - ', error))


// Routing
app.use('/', erpRoute)


// Server Hosting
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})