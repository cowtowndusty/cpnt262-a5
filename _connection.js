const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function (err) {
    err.message = 'Internal Server - Failed to connect to DB...'
    err.status = 500
    console.error(err)
  })
  
module.exports = mongoose

