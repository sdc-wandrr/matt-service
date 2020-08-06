const mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'traveler',
  password: 'travel',
  database: 'hostile_world'
});

connection.connect();

module.exports = connection;