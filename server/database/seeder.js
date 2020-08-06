let faker = require('faker');
let db = require('./index.js');

faker.locale = 'en_US';
// counter used to generate unique numbers for the file names in my image table
// it is used because there will be many unique image entries that will share the same actual image
let nextImageId = 1;

for (let i = 1; i < 101; i++) {
  // generate a random name and address for the current hostel
  let hostelName = `${faker.hacker.adjective()} ${faker.hacker.noun()} Hostel`;
  let hostelAddress = `${faker.address.streetAddress()} ${faker.address.streetName()} ${faker.address.streetSuffix()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}, ${faker.address.countryCode()}`;

  // prepare the query strings and query args for inserting
  let queryStr = 'INSERT INTO `hostels` (name, address) VALUES (?, ?)';
  let queryArgs = [hostelName, hostelAddress];

  // insert new row into hostels table
  db.query(queryStr, queryArgs, (error, results, fields) => {
    if (error) {
      console.log('Error occurred seeding hostel')
      return;
    }
  });

  // make a call to generateImages in order to create a set of 1 - 30 images that will
  // have the current hostel's index as their foreign key
  generateImages(i);

}

function generateImages (hostelId) {
  // generate random number from 1 to 30 to set as number of images included for current hostel
  let imageCount = Math.floor(Math.random() * (30 - 1) + 1);
  // make an array to hold a set of random indexes equal to the imageCount
  let randomS3Indexes = [];

  // run a while loop to generate new random indexes and only push to
  // randomS3Indexes if they are unique
  while (randomS3Indexes.length < imageCount) {
    let randomS3Index = Math.floor(Math.random() * (50 - 1) + 1);
    if (randomS3Indexes.indexOf(randomS3Index) === -1) {
      randomS3Indexes.push(randomS3Index);
    }
  }

  // iterate over range of imageCount to produce that number of unique images
  // to insert into images table
  for (let i = 1; i < imageCount + 1; i++) {
    let fileName = `img_${nextImageId}.jpg`;
    let url = `https://hostileworldimages.s3.us-east-2.amazonaws.com/img_${randomS3Indexes[i - 1]}.jpg`;
    let description = faker.hacker.phrase();
    // if no errors, increment nextImageId;
    nextImageId++;

    // prepare query string and query args for insert
    let queryStr = 'INSERT INTO `images` (file_name, url, description, hostel_id) VALUES (?, ?, ?, ?)';
    let queryArgs = [fileName, url, description, hostelId];

    // check if we are at final image of final hostel
    // if so, close our database connection after work is done
    if (hostelId === 100 && i === imageCount) {
      db.query(queryStr, queryArgs, (error, results, fields) => {
        if (error) {
          console.log('Error occured seeding image')
          return;
        }
        db.end();
      });
    } else {
      db.query(queryStr, queryArgs, (error, results, fields) => {
        if (error) {
          console.log('Error occured seeding image')
          return;
        }
      });
    }
  }

}