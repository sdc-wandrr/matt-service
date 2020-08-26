/* eslint-disable no-multi-str */
const db = require('../database/index.js');

module.exports = {

  fetchAllByHostelId: (id, callback) => {
    const queryStr = 'SELECT * FROM `images` WHERE hostel_id = ?';
    const queryArgs = [id];
    db.query(queryStr, queryArgs, (error, results) => {
      if (error || results.length === 0) {
        callback('error', null);
        return;
      }
      callback(null, results);
    });
  },

  deleteEntryByHostelId: (id, callback) => {
    const queryStr = 'DELETE FROM images, hostels USING images INNER JOIN hostels \
    ON images.hostel_id = hostels.id  WHERE images.hostel_id= ?';
    const queryArgs = [id];
    db.query(queryStr, queryArgs, (error, results) => {
      if (error) {
        callback('error', null);
        return;
      }
      callback(null, results);
    });
  },

};
