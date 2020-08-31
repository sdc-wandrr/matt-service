const pool = require('../database/connection');

const getHostelImages = (req, res) => {
  const requestId = req.params.hostel_id;
  const queryString = `SELECT * FROM images WHERE hostel_id = ${requestId}`;
  pool.query(queryString, (err, results) => {
    if (err) {
      res.status(500)
        .send('An error occured while processing your request. Please try again later.');
    }
    res.status(200)
      .send(results.rows);
  });
};

module.exports = {
  getHostelImages,
};
