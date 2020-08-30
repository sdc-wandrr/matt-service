const { client } = require('../database/connection.js');

const getHostelImages = (req, res) => {
  const requestId = Number(req.params.hostel_id);
  const imageCarousel = client.db('imagecarousel');
  const query = { _id: requestId };
  imageCarousel.collection('images').findOne(query, (error, results) => {
    if (error) {
      res.status(500)
        .send('An error occured while processing your request. Please try again later.');
    }
    res.status(200)
      .send(results);
  });
};

module.exports = {
  getHostelImages,
};
