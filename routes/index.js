// load dependencies
const express = require('express')
const dayjs = require('dayjs')
const router = express.Router()
const config = require('../config')
const gallery = require('../data/gallery')
const apiRoute = require('./api/v0')

// middleware for this router
router.use((req, res, next) => {
  res.locals = config
  next()
})

// defining home page route
router.get('/', (req, res) => {
  res.render('pages/index', { pageTitle: 'JavaScript Image Gallery', dayjs })
})

// defining home login route
router.get('/login', (req, res) => {
  res.render('pages/login', { pageTitle: 'Login Page', dayjs })
})

// defining home register route
router.get('/register', (req, res) => {
  res.render('pages/register', { pageTitle: 'Registration Page', dayjs })
})

// defining gallery page route
router.get('/gallery', (req, res) => {
  res.render('pages/gallery', { pageTitle: 'Gallery Directory' })
})

// defining gallery search option for a5
router.get('/gallery/:title', (req, res) => {
  const image = gallery.find(function(item) {

    return item.title === req.params.title
  })

  if (!image) {
    res.sendStatus(404)
  }

  res.render('pages/image', {
    pageTitle: image.title,
    pic: image
  })
})

// pulling some array data
router.use('/api/v0', apiRoute)

// exporting the module
module.exports = router