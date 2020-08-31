/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const psql = require('./postgreSQL/models/images');
const mongo = require('./MongoDB/models/images');

const app = express();
const PORT = 4000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/hostels/:hostel_id', express.static(path.join(__dirname, '../public')));

app.get('/api/hostels/:hostel_id/images', mongo.getHostelImages);

app.listen(PORT, () => {
  console.log(`Image Carousel Service listening at ${PORT}`);
});

module.exports = app;
