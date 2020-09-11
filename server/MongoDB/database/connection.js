/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
const { username, password, ip } = require('./config.js');

const client = new MongoClient(`mongodb://${username}:${password}@${ip}`,
  { useUnifiedTopology: true, poolSize: 5 });

client.connect();

const Images = client.db('imagecarousel').collection('images');

module.exports = Images;
