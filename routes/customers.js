const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')


router.get('/', async (req,res)=>{
    const customer = await Customer.find()
    console.log(customer)
    res.send(customer)
})

router.post('/', async (req,res)=>{
    if(!req.body || !req.body.phone) return
    const customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    })

    const result = await customer.save()
    console.log(result)
    res.send(result)
})

module.exports = router