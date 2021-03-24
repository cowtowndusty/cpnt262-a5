// load the stuff we need
const path = require('path')
const express = require('express')
const router = require('./routes/index')

const app = express()
// set the view engine to ejs
app.set('view engine','ejs')

// serving the static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

// defining custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('pages/404')
});

// setting backup port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})