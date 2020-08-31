const { MongoClient } = require('mongodb');

const client = new MongoClient(
  'mongodb://localhost:27017/imagecarousel',
  { useUnifiedTopology: true },
);

const connection = client.connect();

const Images = client.db('imagecarousel').collection('images');

module.exports = { connection, client, Images };
