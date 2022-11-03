const express = require('express')
const router = express.Router()
const User =   require('../models/register.js')
const bcrypt = require('bcrypt')

router.post('/', async (req,res)=>{
    if(!req.body.name || !req.body.email || !req.body.password) return
    let user = await User.findOne({email: req.body.email})
    console.log(user)
    if(user) return res.status(400).send('This user already exist')

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
   
    const salt = await bcrypt.genSalt()
    user.password = await bcrypt.hash(user.password, salt)

    const result = await user.save()
    res.send({
        name: user.name,
        email: user.email
    })
})

router.get('/', async (req,res)=>{
    const user = await User.find()
    console.log(user)
    res.send(user)
})

module.exports = router