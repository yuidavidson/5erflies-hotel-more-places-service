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
  price: Number,
  similarPlaces: Array
});

let relatedPlaces = mongoose.model('MorePlaces', morePlaces);



let getAllProperties = (callback) => {
  relatedPlaces.find( {}, (err, results) => {
    if(err) {
      callback(err);
    } else {
      let length = results.length;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < 12; j++) {
          // console.log(results, 'results ')
          // console.log(randomNum)
          let recursive = () => {
            let randomNum = Math.floor(Math.random() * Math.floor(results.length))
            if (randomNum === i) {
              return recursive();
            } else {
            results[i].similarPlaces.push(results[randomNum]._id);
            }
          }
          recursive();
        }
      }
      // console.log(faker.random.arrayElement(results), 'results')
      callback(null, results);
    }
  })
}

module.exports.relatedPlaces = relatedPlaces;
module.exports.getAllProperties = getAllProperties;


