const express = require('express')
const router = express.Router()
const User =   require('../models/register.js')
const bcrypt = require('bcrypt')

router.post('/', async (req,res)=>{
    if(!req.body.email || !req.body.password) return
    let user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Invalid email or password')

   const validPassword =  await bcrypt.compare(req.body.password, user.password)
   if(!validPassword) return res.status(400).send('Invalid email or password')

   res.send(true)
})

module.exports = router