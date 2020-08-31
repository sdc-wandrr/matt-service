const { Images } = require('../database/connection');

const getHostelImages = (req, res) => {
  const query = { _id: Number(req.params.hostel_id) };
  Images.findOne(query)
    .then((data) => {
      res.status(200)
        .send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500)
        .send('An error occured while processing your request. Please try again later.');
    });
};

module.exports = {
  getHostelImages,
};
