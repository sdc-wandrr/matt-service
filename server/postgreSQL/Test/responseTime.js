/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const axios = require('axios');
const express = require('express');
const psql = require('../controllers/images');

// ============== SERVER CONNECTION ============== //
const app = express();
const PORT = 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/hostels/:hostel_id', psql.getHostelImages);
app.put('/api/hostels/:hostel_id/images', psql.updateHostelImage);
app.post('/api/hostels/:hostel_id/images', psql.addHostelImage);
app.delete('/api/hostels/:hostel_id/images', psql.deleteHostelImage);

const server = app.listen(PORT, () => console.log(`Image Carousel Service listening at ${PORT}`));
// ============================================== //

const handelError = (error) => {
  console.log(error);
  server.close();
  process.exit();
};

const requestResults = (requestType, runtimeArray, requestTotal) => {
  const runtimeTotal = runtimeArray.reduce((a, b) => a + b);
  console.log(`======== \n${requestType} REQUESTS:`);
  console.log('Database: PostgreSQL');
  console.log(`Total requests: ${requestTotal}`);
  console.log(`Total runtime: ${runtimeTotal}`);
  console.log(`Average response time ${runtimeTotal / requestTotal}`);
  console.log('========');
};

const generateDeleteId = () => {
  const randomImageID = Math.floor(Math.random() * 100000000) + 1;
  return { data: { id: randomImageID } };
};

const handleAxios = async (
  callback,
  requestsTotal,
  request,
  endString = '',
  requestBody = null,
) => {
  const requestString = `http://localhost:${PORT}/api/hostels/`;
  const runtime = [];
  let counter = 0;
  try {
    while (requestsTotal > counter) {
      const startTime = new Date();
      const randomHostelID = Math.floor(Math.random() * 10000000) + 1;
      const query = requestString + randomHostelID + endString;
      await request(query, typeof requestBody === 'function' ? requestBody() : requestBody)
        .then(() => runtime.push(new Date() - startTime));
      counter += 1;
    }
    callback(runtime);
  } catch (error) {
    handelError(error);
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
  const requestBody = generateDeleteId;
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
