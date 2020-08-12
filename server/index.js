const app = require('./server.js');

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Image Carousel Service listening at ', port);
});
