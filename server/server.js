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

// create a hostel listing
app.post('/api/hostels/:hostel_id', (req, res) => {
  const newHostelListing = [req.body.name, req.body.address];
  const newImagesListing = [req.body.file_name, req.body.url, req.body.description];
  models.image.createNewHostelListing(newHostelListing, newImagesListing, (error, response) => {
    if (error) {
      res.status(500).send('The new record was not sucessfully created. Please try again later.');
    } else {
      res.status(200).send('The new record was successfully created.');
      res.end(response);
    }
  });
});

// get all image table data
app.get('/api/hostels/:hostel_id/images', (req, res) => {
  models.image.fetchAllByHostelId(req.params.hostel_id, (error, response) => {
    if (error) {
      res.status(500).send('We were unable to process your request. Please try again later.');
      return;
    }
    res.status(200).send(response);
  });
});

// update the file_name, URL, and description in images table
app.put('/api/hostels/:hostel_id', (req, res) => {
  const updateInfo = [req.body.file_name, req.body.url,
    req.body.description, req.params.hostel_id, req.body.id];
  models.image.updateEntryByHostelId(updateInfo, (error, response) => {
    if (error) {
      res.status(500).send('The record was not sucessfully updated. Please try again later.');
    } else {
      res.status(200).send('The listing was successfully updated.');
      res.end(response);
    }
  });
});

// delete a full listing (hostels table & images table)
app.delete('/api/hostels/:hostel_id', (req, res) => {
  models.image.deleteEntryByHostelId(req.params.hostel_id, (error, response) => {
    if (error) {
      res.status(500).send('The record was not sucessfully deleted. Please try again later.');
    } else {
      res.status(200).send('The listing was successfully deleted.');
      res.end(response);
    }
  });
});

module.exports = app;
