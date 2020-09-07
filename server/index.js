/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
const mongo = require('./MongoDB/controllers/images');

const app = express();
const PORT = 3007;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/hostels/:hostel_id', express.static(path.join(__dirname, '../public')));

app.post('/api/hostels/:hostel_id/images', mongo.addHostelImage);
app.get('/api/hostels/:hostel_id/images', mongo.getHostelImages);
app.put('/api/hostels/:hostel_id/images', mongo.updateHostelImage);
app.delete('/api/hostels/:hostel_id/images', mongo.deleteHostelImage);
app.delete('/api/hostels/:hostel_id', mongo.deleteHostel);

const server = app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

module.exports = { app, server };
