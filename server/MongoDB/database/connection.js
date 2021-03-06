/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
const { username, password, ip } = require('./config.js');

const client = new MongoClient(`mongodb://${username}:${password}@${ip}`,
  { useUnifiedTopology: true, poolSize: 50 });

client.connect();

const db = client.db('imagecarousel').collection('images');

module.exports = db;
