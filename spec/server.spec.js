const app = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);

test('GETs the endpoint for images of a hostel', async (done) => {
  const hostelId = 30;
  const res = await request.get(`/api/hostels/${hostelId}/images`);

  expect(res.body.length).toBeGreaterThan(0);
  expect(res.body[0].url).toBeDefined();
  done();
});

test('Does not GET the endpoint for images of a nonexistant hostel', async (done) => {
  const hostelId = 500;
  const res = await request.get(`/api/hostels/${hostelId}/images`);

  expect(res.statusCode).toBe(502);
  expect(Object.keys(res.body).length).toBe(0);
  done();
});