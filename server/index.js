const express = require('express');
const url = require('url');
const path = require('path');

const app = express();

const port = 3000;
const models = require('./models/index.js');

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/images', (req, res) => {
  // invoke images model method "fetchAllByHostel"
  const params = url.parse(req.url, true).query;

  models.image.fetchAllByHostelId(params.hostel_id, (error, images) => {
    if (error) {
      res.status(502).send();
      return;
    }
    res.send(images);
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Image Carousel Service listening at ', port);
});
