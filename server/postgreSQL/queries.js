const pool = require('./connection');

const getHostelImages = (request, response) => {
  const requestId = request.params.id;
  pool.query(`SELECT * FROM images WHERE hostel_id = ${requestId}`, (error, results) => {
    if (error) {
      console.log(error);
      response.status(500).send('There was an error with your requires. Please try again later.');
    }
    // console.log(results);
    response.status(200).send(results.rows);
  });
};

module.exports = {
  getHostelImages,
};
