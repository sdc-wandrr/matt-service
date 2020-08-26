/* eslint-disable no-multi-str */
const db = require('../database/index.js');

module.exports = {

  // POST request
  createNewHostelListing: (hostelListing, hostelImages, callback) => {
    const hostelListingQueryStr = 'INSERT INTO hostels (name, address) VALUES (?, ?)';
    const hostelImagesQueryStr = 'INSERT INTO images (file_name, url, description, hostel_id) \
    VALUES (?, ?, ?, LAST_INSERT_ID())';

    const hostelQuery = new Promise((resolve, reject) => {
      db.query(hostelListingQueryStr, hostelListing, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
    const imagesQuery = new Promise((resolve, reject) => {
      db.query(hostelImagesQueryStr, hostelImages, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
    Promise.all([hostelQuery, imagesQuery])
      .then((results) => callback(null, results))
      .catch((error) => callback(error, null));
  },

  // GET request
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

  // PUT request
  updateEntryByHostelId: (updateInfo, callback) => {
    const queryStr = 'UPDATE images SET file_name = ?, url = ?, description = ? \
    WHERE hostel_id = ? AND id = ?';
    db.query(queryStr, updateInfo, (error, results) => {
      if (error) {
        callback('error', null);
        return;
      }
      callback(null, results);
    });
  },

  // DELETE request
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
