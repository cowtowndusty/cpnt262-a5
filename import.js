const mongoose = require('./_connection.js') 

// Import seed data
const dbSeed = require(`./seeds/gallery`);

// Define model
const Animal = require(`./models/Image`);

Animal.insertMany(dbSeed, function(error, animal) {
  console.log('Data import completed.')
  mongoose.connection.close();
});