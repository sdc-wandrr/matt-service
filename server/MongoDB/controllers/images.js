/* eslint-disable no-console */
const db = require('../database/connection');

const errorMessage = 'An error occured while processing your request, please try again later.';

const addHostelImage = (req, res) => {
  const find = { _id: Number(req.params.hostel_id) };
  const add = { $addToSet: { images: { id: req.body.id, url: req.body.url } } };
  db.updateOne(find, add)
    .then(() => res.status(200).send('Image added successfully'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(errorMessage);
    });
};

const getHostelImages = (req, res) => {
  const find = { _id: Number(req.params.hostel_id) };
  db.find(find).limit(1).toArray().then((data) => res.status(200).send(data[0]))
    .catch((err) => {
      console.log(err);
      res.status(500).send(errorMessage);
    });
};

const updateHostelImage = (req, res) => {
  const find = { _id: Number(req.params.hostel_id), 'images.id': req.body.id };
  const set = { $set: { 'images.$.url': req.body.url } };
  db.updateOne(find, set)
    .then(() => res.status(200).send('Update successful'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(errorMessage);
    });
};

const deleteHostelImage = (req, res) => {
  const find = { _id: Number(req.params.hostel_id) };
  const deleteImage = { $pull: { images: { id: req.body.id } } };
  db.updateOne(find, deleteImage)
    .then(() => res.status(200).send('Image deleted successfully'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(errorMessage);
    });
};

const deleteHostel = (req, res) => {
  const find = { _id: Number(req.params.hostel_id) };
  db.deleteOne(find)
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
