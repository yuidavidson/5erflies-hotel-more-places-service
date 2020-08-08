const faker = require('faker');
const db = require('./index.js')
let seeder = () => {
  for (let i = 0; i < 100; i++) {
    let newPlace = new db.relatedPlaces({
      _id: i,
      img: faker.address.propertyImg(),
      isSuperHost: faker.random.boolean(),
      propertyType: faker.address.propertyType(),
      numOfRooms: faker.random.number({
        min: 1,
        max: 5
      }),
      rating: faker.random.number({
        min: 3,
        max: 5
      }),
      numOfRatings: faker.random.number(300),
      description: faker.address.propertyDescription(),
      price: faker.random.number({
        min: 50,
        max: 400
      })
    })
    newPlace.save( (err) => {
      if(err) {
        console.log('err');
      }
    })
  }
}
seeder();
module.exports.seeder = seeder;