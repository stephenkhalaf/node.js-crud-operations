const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log('Connected to database...'))
.catch(err=>console.log('Couldn\'t connect to db',err))

module.exports = mongoose