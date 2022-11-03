const express = require('express')
const router = express.Router()
const Rental = require('../models/rentals.js')


router.get('/', async (req,res)=>{
    const rentals = await Rental.find()
    console.log(rentals)
    res.send(rentals)
})

router.post('/', async (req,res)=>{
    if(!req.body.name) return
    const rental = new Rental({
        name: req.body.name
    })

    const result = await rental.save()
    console.log(result)
    res.send(result)
})

module.exports = router