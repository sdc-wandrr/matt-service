/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const axios = require('axios');
const express = require('express');
const mongo = require('../controllers/images');

// ============== SERVER CONNECTION ============== //
const app = express();
const PORT = 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/hostels/:hostel_id', mongo.getHostelImages);
app.put('/api/hostels/:hostel_id/images', mongo.updateHostelImage);
app.post('/api/hostels/:hostel_id/images', mongo.addHostelImage);
app.delete('/api/hostels/:hostel_id/images', mongo.deleteHostelImage);

const server = app.listen(PORT, () => console.log(`Image Carousel Service listening at ${PORT}`));
// ============================================== //

const requestResults = (requestType, runtimeArray, requestTotal) => {
  const runtimeTotal = runtimeArray.reduce((a, b) => a + b);
  console.log(`======== \n${requestType} REQUESTS:`);
  console.log('Database: MongoDB');
  console.log(`Total requests: ${requestTotal}`);
  console.log(`Total runtime: ${runtimeTotal}`);
  console.log(`Average response time ${runtimeTotal / requestTotal}`);
  console.log('========');
};

const handleAxios = async (
  callback,
  requestsTotal,
  request,
  endString = '',
  requestBody = null,
) => {
  let counter = 0;
  const runtime = [];
  const requestString = `http://localhost:${PORT}/api/hostels/`;
  try {
    while (requestsTotal > counter) {
      const startTime = new Date();
      const randomHostelID = Math.floor(Math.random() * 10000000) + 1;
      const query = requestString + randomHostelID + endString;
      await request(query, requestBody)
        .then(() => runtime.push(new Date() - startTime));
      counter += 1;
    }
    callback(runtime);
  } catch (error) {
    console.log(error);
    server.close();
    process.exit();
  }
};

const testGetRequest = (getRequests = 25000) => {
  const request = axios.get;
  return handleAxios(
    (results) => requestResults('GET', results, getRequests),
    getRequests,
    request,
  );
};

const testPutRequest = (putRequests = 25000) => {
  const request = axios.put;
  const requestBody = { id: 1, url: 'www.urltestscript.com/image_test.jpg' };
  const endString = '/images';
  return handleAxios(
    (results) => requestResults('PUT', results, putRequests),
    putRequests,
    request,
    endString,
    requestBody,
  );
};

const testPostRequest = (postRequests = 25000) => {
  const request = axios.post;
  const requestBody = { id: 99, url: 'www.urltestscript.com/image_POST_test.jpg' };
  const endString = '/images';
  return handleAxios(
    (results) => requestResults('POST', results, postRequests),
    postRequests,
    request,
    endString,
    requestBody,
  );
};

const testDeleteRequest = (deleteRequests = 25000) => {
  const request = axios.delete;
  const requestBody = { data: { id: 1 } };
  const endString = '/images';
  return handleAxios(
    (results) => requestResults('DELETE', results, deleteRequests),
    deleteRequests,
    request,
    endString,
    requestBody,
  );
};

const testAll = (requestTotal) => {
  testGetRequest(requestTotal)
    .then(() => testPutRequest(requestTotal))
    .then(() => testPostRequest(requestTotal))
    .then(() => testDeleteRequest(requestTotal))
    .then(() => {
      server.close();
      process.exit();
    });
};

testAll(25000);
