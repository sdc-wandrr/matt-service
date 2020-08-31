/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const psql = require('./postgreSQL/controllers/images');
const mongo = require('./MongoDB/controllers/images');

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

app.post('/api/hostels/:hostel_id/images', psql.addHostelImage);
app.get('/api/hostels/:hostel_id', psql.getHostelImages);
app.put('/api/hostels/:hostel_id/images', psql.updateHostelImage);
app.delete('/api/hostels/:hostel_id/images', psql.deleteHostelImage);
app.delete('/api/hostels/:hostel_id', psql.deleteHostel);

app.listen(PORT, () => console.log(`Image Carousel Service listening at ${PORT}`));

module.exports = app;
