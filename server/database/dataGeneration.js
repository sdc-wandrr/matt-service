/* eslint-disable no-console */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

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

const generatePrimaryRecords = async (primaryRecordCount) => {
  if (primaryRecordCount > 0) {
    try {
      const numberOfImagesToAssign = Math.floor(Math.random() * 25) + 1;
      const hostelData = await generateHostelImages(numberOfImagesToAssign, primaryRecordCount);
      await csvWriter.writeRecords(hostelData);
      totalCsvRowsWritten += numberOfImagesToAssign;
    } catch (err) {
      console.log(err);
      process.exit();
    }
    await generatePrimaryRecords(primaryRecordCount - 1);
  }
};

const timestampDataGeneration = async (primaryRecordCount) => {
  try {
    const dataGenStartTime = new Date();
    await generatePrimaryRecords(primaryRecordCount, 0);
    const dataGenFinishTime = new Date();
    console.log(`Total generation time: ${dataGenFinishTime - dataGenStartTime}ms`);
    console.log(`Total number of rows: ${totalCsvRowsWritten.toLocaleString()}`);
    totalCsvRowsWritten = 0;
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

timestampDataGeneration(10000000);
