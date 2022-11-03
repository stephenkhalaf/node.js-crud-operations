const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Genre = require('../models/genres')

router.get('/', async (req,res)=>{
    const genres = await Genre.find()
    console.log(genres)
    res.send(genres)
})

router.post('/', async (req,res)=>{
    if(!req.body.name) return
    const genre = new Genre({
        name: req.body.name
    })

    let result = await genre.save()
    console.log(result)
    res.send(result)
})

router.put('/:id', async (req,res)=>{
    if(!req.body.name) return
   const genre = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new:true})
   if(!genre) res.status(400).send('No genre is found')
})

router.delete('/:id', async (req,res)=>{
    const genre = await Genre.findByIdAndRemove(req.params.id)
    if(!genre) res.status(404).send('No genre is found')
    res.send(genre)
})

router.get('/:id', async (req,res)=>{
    const genre = await Genre.findById(req.params.id)
    if(!genre) res.status(404).send('No genre is found')
    res.send(genre)
})


module.exports = router