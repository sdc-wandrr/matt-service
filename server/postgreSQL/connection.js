const { Pool } = require('pg');
const postgresConfig = require('./config.js');

const pool = new Pool(postgresConfig);

module.exports = pool;
