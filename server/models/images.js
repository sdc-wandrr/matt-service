let db = require('../database/index.js');

class Image {

  fetchAllByHostelId (id, callback) {
    let queryStr = 'SELECT * FROM `images` WHERE hostel_id = ?';
    let queryArgs = [id];

    db.query(queryStr, queryArgs, (error, results, fields) => {
      if (error) {
        callback(error, null);
        return;
      }

      callback(null, results);
    })
  }
}








module.exports = new Image();