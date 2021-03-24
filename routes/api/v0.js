// load the things we need
const express = require('express')
const gallery = require('../../data/gallery')

const router = express.Router()

// defining the gallery array and changing it from .js to .json
router.get('/gallery', (req, res) => {
  res.json(gallery)
})

// exporting module
module.exports = router