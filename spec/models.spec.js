/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const images = require('../server/models/images.js');

describe('Querying the database', () => {
  test('fetchAllByHostelId returns a list of images for valid ids', () => {
    images.fetchAllByHostelId(24, (error, fetchedImages) => {
      expect(fetchedImages.length).toBeGreaterThan(0);
    });
  });

  test('fetchAllByHostelId returns an error for ids greater than 100', () => {
    images.fetchAllByHostelId(103, (error, fetchedImages) => {
      expect(error).toBeDefined();
      expect(fetchedImages).toBe(null);
    });
  });
});
