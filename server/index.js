const express = require('express');
const app = express();
let port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '../client'));







app.listen(port, () => {
  console.log('Image Carousel Service listening at ', port);
});