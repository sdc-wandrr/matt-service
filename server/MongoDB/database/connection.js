/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
const { username, password } = require('./config.js');
const getIPAddress = require('./get_ip');

let client;

const queryDatabase = () => new Promise((resolve, reject) => {
  let dbConnect;
  getIPAddress()
    .then((ip) => {
      dbConnect = ip;
      client = new MongoClient(
        `mongodb://${username}:${password}@${ip}`,
        {
          useUnifiedTopology: true,
          poolSize: 100,
        },
      );
    })
    .then(() => client.connect())
    .then(() => console.log(`MongoDB connected on: ${dbConnect}`))
    .then(() => resolve(client.db('imagecarousel').collection('images')))
    .catch((error) => reject(error));
});

module.exports = (queryDatabase());
