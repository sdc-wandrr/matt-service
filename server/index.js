const express = require('express');
const app = express();
const url = require('url');
let port = 3000;
let models = require('./models/index.js');

app.use(express.urlencoded());
app.use(express.static(__dirname + '../client'));



app.get('/api/images', (req, res) => {
  // invoke images model method "fetchAllByHostel"
  let hostelId = url.parse(req.url, true).query;
  console.log(hostelId);
  models.image.fetchAllByHostelId(hostelId, (error, images) => {
    if (error) {
      res.status(502).send();
      return;
    }
    res.send(images);
  });
});



app.listen(port, () => {
  console.log('Image Carousel Service listening at ', port);
});