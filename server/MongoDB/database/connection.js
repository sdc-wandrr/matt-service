const { MongoClient } = require('mongodb');
const { username, password, ip } = require('./config.js');

const client = new MongoClient(
  `mongodb://${username}:${password}@${ip}`,
  {
    useUnifiedTopology: true,
    poolSize: 10,
  },
);

const connection = client.connect();

const Images = client.db('imagecarousel').collection('images');

module.exports = { connection, client, Images };
