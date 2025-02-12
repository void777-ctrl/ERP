const express = require('express')
const app = express()

// IMPORT MODULES


// IMPORT FUNCTIONS
const { connectMongoDB } = require('./connection')
const bdeRoute = require('./routes/bdeDataRoutes')


// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// DOTENV IMPORT
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8001
const mongoURL = process.env.mongoURL


// MongoDB Connection
connectMongoDB(mongoURL)
.then(() => console.log('MongoDB Connected Successfully'))
.catch((error) => console.log('Something went wrong while connecting to MongoDB - ', error))


// Routing
app.use('/bde', bdeRoute)


// Server Hosting
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})