/* eslint-disable no-console */
const pool = require('../database/connection');

const errorMessage = 'An error occured while processing your request, pease try again later.';

const addHostelImage = (req, res) => {
  const queryString = `INSERT INTO images(hostel_id, url)
  VALUES ('${req.params.hostel_id}', '${req.body.url}')`;
  pool.query(queryString)
    .then(() => res.status(200).send('Image added successfully'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(errorMessage);
    });
};

const getHostelImages = (req, res) => {
  const queryString = `SELECT * FROM images WHERE hostel_id = ${req.params.hostel_id}`;
  pool.query(queryString)
    .then((results) => res.status(200).send(results.rows))
    .catch((err) => {
      console.log(err);
      res.status(500).send(errorMessage);
    });
};

const updateHostelImage = (req, res) => {
  const queryString = `UPDATE images SET url = '${req.body.url}'
  WHERE hostel_id = ${req.params.hostel_id} AND ID = ${req.body.id}`;
  pool.query(queryString)
    .then(() => res.status(200).send('Update successful'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(errorMessage);
    });
};

const deleteHostelImage = (req, res) => {
  const queryString = `DELETE FROM images WHERE ID = '${req.body.id}'`;
  pool.query(queryString)
    .then(() => res.status(200).send('Image deleted successfully'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(errorMessage);
    });
};

const deleteHostel = (req, res) => {
  const queryString = `DELETE FROM images WHERE hostel_id = ${req.params.hostel_id}`;
  pool.query(queryString)
    .then(() => res.status(200).send('Hostel deleted successfully'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(errorMessage);
    });
};

module.exports = {
  addHostelImage,
  getHostelImages,
  updateHostelImage,
  deleteHostelImage,
  deleteHostel,
};
