// load the things we need
const express = require('express')
// const gallery = require('../../data/gallery')

const router = express.Router()
const Image = require('../../models/image')

// retrieve images via async/await
router.get('/gallery', async (req, res, next) => {
  try {
    // return next(new Error("Boom Goes The Dynamite - Something Exploded")) // Error handling test
    const gallery = await Image.find({})
    if (gallery) return res.json(gallery)
    return next(new Error("Unable to locate images."))
  } catch(err) {
    return next(err)
  }
})

// export module
module.exports = router