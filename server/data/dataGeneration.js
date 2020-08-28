/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'imageCarousel.csv',
  header: [
    { id: 'hostelID', title: 'ID' },
    { id: 'url', title: 'URL' },
  ],
});

const generateHostelImages = (hostelID, totalNumberOfImages) => {
  let imageCounter = totalNumberOfImages;
  const imageRecords = [];
  while (imageCounter > 0) {
    const imageFileName = Math.floor(Math.random() * 1000);
    const url = `https://sdc-ic.s3-us-west-1.amazonaws.com/File+${imageFileName}.jpg`;
    imageRecords.push({ hostelID, url });
    imageCounter -= 1;
  }
  return imageRecords;
};

const generatePrimaryRecord = async (primaryRecordId, numberOfImagesToAssign) => {
  try {
    const hostelData = await generateHostelImages(primaryRecordId, numberOfImagesToAssign);
    await csvWriter.writeRecords(hostelData);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const timestampDataGeneration = async (primaryRecordCount = 10000000) => {
  let primaryRecordId = primaryRecordCount;
  let totalWrittenCSVRows = 0;
  const dataGenStartTime = new Date();
  try {
    while (primaryRecordId > 0) {
      const numberOfImagesToAssign = Math.floor(Math.random() * 25) + 1;
      await generatePrimaryRecord(primaryRecordId, numberOfImagesToAssign);
      primaryRecordId -= 1;
      totalWrittenCSVRows += numberOfImagesToAssign;
    }
    const dataGenFinishTime = new Date();
    console.log(`Total generation time: ${dataGenFinishTime - dataGenStartTime}ms`);
    console.log(`Total data entries: ${totalWrittenCSVRows.toLocaleString()}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

timestampDataGeneration();
