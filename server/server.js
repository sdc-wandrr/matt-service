const express = require('express');
const path = require('path');

const models = require('./models/index.js');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/hostels/:hostel_id', express.static(path.join(__dirname, '../public')));

// app.post(); // create a new item

app.get('/api/hostels/:hostel_id/images', (req, res) => {
  models.image.fetchAllByHostelId(req.params.hostel_id, (error, images) => {
    if (error) {
      res.status(500).send('We were unable to process your request. Please try again later.');
      return;
    }
    res.send(images);
  });
});

// update an item
app.put('/api/hostels/:hostel_id', (req, res) => {
  const updateInfo = [req.params.hostel_id, req.body.id, req.body.file_name,
    req.body.url, req.body.description];
  models.image.updateEntryByHostelId(updateInfo, (error, response) => {
    if (error) {
      res.status(500).send('The record was not sucessfully updated. Please try again later.');
    } else {
      res.status(200).send('The listing was successfully updated');
      res.end(response);
    }
  });
});

// delete an item
app.delete('/api/hostels/:hostel_id', (req, res) => {
  models.image.deleteEntryByHostelId(req.params.hostel_id, (error, response) => {
    if (error) {
      res.status(500).send('The record was not sucessfully deleted. Please try again later.');
    } else {
      res.status(200).send('The listing was successfully deleted');
      res.end(response);
    }
  });
});

module.exports = app;
