const db = require('../database/index.js');

module.exports.fetchAllByHostelId = (id, callback) => {
  const queryStr = 'SELECT * FROM `images` WHERE hostel_id = ?';
  const queryArgs = [id];

  db.query(queryStr, queryArgs, (error, results) => {
    if (error || results.length === 0) {
      db.end();
      callback('error', null);
      return;
    }
    db.end();
    callback(null, results);
  });
};
