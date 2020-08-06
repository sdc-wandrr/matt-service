const express = require('express');
const app = express();
let port = 3000;
let models = require('./models/index.js');

app.use(express.json());
app.use(express.static(__dirname + '../client'));



app.get('/api/images', (req, res) => {
  // invoke images model method "fetchAllByHostel"
  let hostelId = req.params.id;
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