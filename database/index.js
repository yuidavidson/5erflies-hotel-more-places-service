const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/morePlaces');

const morePlaces = mongoose.Schema({
  propertyId: Number,
  img: String,
  isSuperHost: Boolean,
  propertyType: String,
  numOfRooms: Number,
  rating: Number,
  numOfRatings: Number,
  description: String,
  price: Number,
  similarPlaces: Array,
});

const relatedPlaces = mongoose.model('MorePlaces', morePlaces);

const getAllProperties = (callback) => {
  relatedPlaces.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      const { length } = results;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < 12; j++) {
          // console.log(results, 'results ')
          // console.log(randomNum)
          const randomNumGen = () => {
            if (results[i].similarPlaces.length > 12) {
              return;
            }
            const randomNum = Math.floor(Math.random() * Math.floor(results.length));
            if (randomNum === i) {
              return randomNumGen();
            }
            results[i].similarPlaces.push(results[randomNum].propertyId);
            results[i].save((err) => {
              if (err) {
                console.log('');
              }
            });
          };
          randomNumGen();
        }
      }
      // console.log(faker.random.arrayElement(results), 'results')
      callback(null, results);
    }
  });
};

module.exports.relatedPlaces = relatedPlaces;
module.exports.getAllProperties = getAllProperties;
