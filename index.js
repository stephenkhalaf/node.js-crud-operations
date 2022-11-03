const express = require('express')
const mongoose = require('mongoose')
const Joi= require('joi')
const app = express()
const genre = require('./routes/genres.js')
const customers = require('./routes/customers')
const movies = require('./routes/movies.js')
const rentals = require('./routes/rentals.js')
const users = require('./routes/register.js')
const auth = require('./routes/auth')
const db = require('./db.connect.js')
const port = process.env.PORT || 3000


app.use(express.json())
app.use('/api/genres/',genre)
app.use('/api/customers/', customers)
app.use('/api/movies/', movies)
app.use('/api/rentals/',rentals)
app.use('/api/register/',users)
app.use('/api/auth/', auth)

app.listen(port, ()=>console.log('Listening at port', port))
