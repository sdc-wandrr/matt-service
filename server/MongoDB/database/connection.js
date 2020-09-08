/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
const { username, password } = require('./config.js');
const getIPAddress = require('./get_ip');

const queryDatabase = () => new Promise((resolve, reject) => {
  getIPAddress()
    .then((ip) => new MongoClient(`mongodb://${username}:${password}@${ip}`,
      { useUnifiedTopology: true, poolSize: 1000 }))
    .then((client) => {
      client.connect();
      console.log('MongoDB connected');
      resolve(client.db('imagecarousel').collection('images'));
    })
    .catch((error) => reject(error));
});

module.exports = (queryDatabase());
