const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'traveler',
  password: 'travel',
  database: 'image-carousel',
});

connection.connect();

module.exports = connection;
