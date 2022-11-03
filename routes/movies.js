const express = require('express')
const router = express.Router()
const Movie = require('../models/movies.js')

router.post('/', async (req,res)=>{
    const movie = new Movie({
        title: req.body.title,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    })

    const result = await movie.save()
    console.log(result)
    res.send(result)
})
module.exports = router