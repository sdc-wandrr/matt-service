/* eslint-disable no-console */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let primaryRecordCount = 10000000;

const csvWriter = createCsvWriter({
  path: 'imageCarousel.csv',
  header: [
    { id: 'hostel_id', title: 'ID' },
    { id: 'url', title: 'URL' },
  ],
});

const generateHostelIdData = (totalAmountOfImages, id) => {
  let counter = totalAmountOfImages;
  const imageRecords = [];
  while (counter > 0) {
    const imageIndex = Math.floor(Math.random() * 1000) + 1;
    imageRecords.push({ hostel_id: id, url: `amazonbucketurl/images/${imageIndex}.jpg` });
    counter -= 1;
  }
  return imageRecords;
};

const generatePrimaryRecords = async () => {
  if (primaryRecordCount >= 0) {
    try {
      const totalImages = Math.floor(Math.random() * 8) + 1;
      const hostelData = await generateHostelIdData(totalImages, primaryRecordCount);
      await csvWriter.writeRecords(hostelData);
      primaryRecordCount -= 1;
    } catch (err) {
      console.log(err);
      process.exit();
    }
    await generatePrimaryRecords();
  }
};

const timestampDataGeneration = async () => {
  try {
    const timebefore = new Date();
    await generatePrimaryRecords();
    const timeafter = new Date();
    console.log(`It took ${timeafter - timebefore}ms to complete the data generation.`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

timestampDataGeneration();
