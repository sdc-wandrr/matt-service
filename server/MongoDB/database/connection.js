const { MongoClient } = require('mongodb');

const client = new MongoClient(
  'mongodb://localhost:27017/imagecarousel',
  { useUnifiedTopology: true },
);

const connection = client.connect();

module.exports = { connection, client };
