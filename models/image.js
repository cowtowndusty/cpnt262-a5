// load mongoose
const mongoose = require('mongoose')

// define our Schema
const gallerySchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    width: Number,
    height: Number,
    pathURL: String,
    linkURL: String,
    credit: String,
    creditURL: String
  }
)

// Compile and export the Schema - see: https://mongoosejs.com/docs/models.html 
module.exports = mongoose.model('Image', gallerySchema)
// Important: The first argument of mongoose.model() is the singular name of the collection your model is for. 
// ** Mongoose automatically looks for the plural, lowercase version of your model name. **"
// In our example, we name our model 'Definition' and mongoose will automatically look for the collection 'definitions' 