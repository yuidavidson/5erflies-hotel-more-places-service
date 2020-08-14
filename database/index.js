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

const getProperty = (req, callback) => {
  relatedPlaces.find({propertyId: req.propertyId}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

const getAllProperties = (callback) => {
  relatedPlaces.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      const { length } = results;
      for (let i = 0; i < length; i += 1) {
        for (let j = 0; j < 12; j += 1) {
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
            results[i].save((error) => {
              if (error) {
                console.error('');
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

module.exports.getProperty = getProperty;
module.exports.relatedPlaces = relatedPlaces;
module.exports.getAllProperties = getAllProperties;
