const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'image_carousel',
});

connection.connect();

module.exports = connection;
