const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/morePlaces');

let morePlaces = mongoose.Schema({
  _id: Number,
  img: String,
  isSuperHost: Boolean,
  propertyType: String,
  numOfRooms: Number,
  rating: Number,
  numOfRatings: Number,
  description: String,
  price: Number
});

let relatedPlaces = mongoose.model('MorePlaces', morePlaces);


let getAllProperties = (callback) => {
  relatedPlaces.find( (err, results) => {
    if(err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

module.exports.relatedPlaces = relatedPlaces;
module.exports.getAllProperties = getAllProperties;


