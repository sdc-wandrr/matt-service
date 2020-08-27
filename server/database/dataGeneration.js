/* eslint-disable no-console */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let primaryRecordCount = 100000;
let totalCsvRowsWritten = 0;

const csvWriter = createCsvWriter({
  path: 'imageCarousel.csv',
  header: [
    { id: 'hostelID', title: 'ID' },
    { id: 'url', title: 'URL' },
  ],
});

const generateHostelImages = (totalNumberOfImages, hostelID) => {
  let imageCounter = totalNumberOfImages;
  const imageRecords = [];
  while (imageCounter > 0) {
    const imageFileName = Math.floor(Math.random() * 1001);
    const url = `amazonbucketurl/images/${imageFileName}.jpg`;
    imageRecords.push({ hostelID, url });
    imageCounter -= 1;
  }
  return imageRecords;
};

const generatePrimaryRecords = async () => {
  if (primaryRecordCount >= 0) {
    try {
      const numberOfImagesToAssign = Math.floor(Math.random() * 25) + 1;
      const hostelData = await generateHostelImages(numberOfImagesToAssign, primaryRecordCount);
      await csvWriter.writeRecords(hostelData);
      totalCsvRowsWritten += numberOfImagesToAssign;
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
    const dataGenStartTime = new Date();
    await generatePrimaryRecords();
    const dataGenFinishTime = new Date();
    console.log(`Total generation time: ${dataGenFinishTime - dataGenStartTime}ms`);
    console.log(`Total number of rows: ${totalCsvRowsWritten.toLocaleString()}`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

timestampDataGeneration();
